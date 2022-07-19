import { getRepository } from 'typeorm';
//---------------------------------------------------------------------------
import dataSource from '^database/data-source';
//---------------------------------------------------------------------------
import {
  LogEntryQueryInterface,
  LogEntryResultsInterface,
  LogEntryWriteInterface,
} from '^interface/general/LogEntry';
import { DataType } from '^entity/general/DataType';
import { Event } from '^entity/general/Event';
import { LogEntry } from '^entity/general/LogEntry';
import { User } from '^entity/access/User';
//---------------------------------------------------------------------------
import { AbstractService } from '^service/AbstractService';
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

/**
 *  Service for the application log.
 */
export default class LogService extends AbstractService {
  logEntryRp = dataSource.getRepository(LogEntry);

  /**
   *  Get events present in log.
   *  (To populate query form.)
   *
   *  @returns `Event`[]
   */
  async getLogEvents(): Promise<Event[]> {
    return await getRepository(Event)
      .createQueryBuilder('event')
      .leftJoin('event.logEntry', 'logEntry')
      .where('logEntry.id IS NOT NULL')
      .distinct(true)
      .getMany();
  }

  /**
   *  Get performing users present in log.
   *  (To populate query form.)
   *
   *  @returns `User`[]
   */
  async getLogUsers(): Promise<User[]> {
    return await getRepository(User)
      .createQueryBuilder('user')
      .leftJoin('user.logEntry', 'logEntry')
      .where('logEntry.id IS NOT NULL')
      .distinct(true)
      .getMany();
  }

  /**
   *  Get data types present in log.
   *  (To populate query form.)
   *
   *  @returns `DataType`[]
   */
  async getLogDataTypes(): Promise<DataType[]> {
    return await getRepository(DataType)
      .createQueryBuilder('dataType')
      .leftJoin('dataType.logEntry', 'logEntry')
      .where('logEntry.id IS NOT NULL')
      .distinct(true)
      .getMany();
  }

  /**
   *  Query the log by search parameters.
   *
   *  @param params - Search parameters.
   *  @returns `LogEntry`[]
   */
  async queryLogEntry(
    params: LogEntryQueryInterface
  ): Promise<LogEntryResultsInterface> {
    const qb = getRepository(LogEntry)
      .createQueryBuilder('log')
      .leftJoinAndSelect('log.event', 'event')
      .leftJoinAndSelect('log.dataType', 'dataType')
      .leftJoinAndSelect('log.user', 'user');

    //  Where: (various attributes)
    ['event', 'dataType', 'operandId', 'comment', 'user'].forEach((attr) => {
      if (this.exprDefined(params[attr])) {
        qb.andWhere(`log.${attr} = :id`, { id: params[attr] });
      }
    });

    //  Where: detail

    //  Where: dates
    [
      ['fromDttm', '>='],
      ['toDttm', '<='],
    ].forEach((each, index) => {
      const [attr, comparison] = each;
      if (this.exprDefined(params[attr])) {
        qb.andWhere(`log.eventDttm ${comparison} :v`, {
          v: params[attr] + ' ' + (index ? '23:59:59' : '00:00:00'),
        });
      }
    });

    //  Pagination
    qb.take(params.query.limit).skip(
      (params.query.page - 1) * params.query.limit
    );

    //  Sorting

    //  Query and return
    return { results: await qb.getMany(), totalCount: await qb.getCount() };
  }

  /**
   *  Write a log entry.
   *
   *  @param submission - The submitted log entry.
   *  @returns `LogEntry`
   */
  async writeLogEntry(submission: LogEntryWriteInterface): Promise<LogEntry> {
    const logEntry = new LogEntry();

    //  Get expected parameters by UID
    //
    // (Note: using simple arrays (['dataType', DataType]) causes complaints that the element 0s are 'typeof X'.
    for (const param of [
      { attr: 'dataType', class: DataType },
      { attr: 'event', class: Event },
    ]) {
      if (typeof logEntry[param.attr] !== 'undefined') {
        logEntry[param.attr] = await dataSource
          .getRepository(param.class)
          .findOneBy({
            uid: submission[param.attr],
            active: true,
          });

        if (!logEntry[param.attr]) {
          throw new Error(
            `Entity for ${param.attr} not found; UID requested: ${
              submission[param.attr]
            }`
          );
        }
      }
    }

    //  Save the operand ID if provided
    if (submission.operandId) {
      logEntry.operandId = submission.operandId;
    }

    //  Get the acting user if provided
    //
    if (submission.user) {
      logEntry.user = await dataSource.getRepository(User).findOneBy({
        id: submission.user,
      });
      if (!logEntry.user) {
        throw new Error(
          `Entity for user not found; UID requested: ${submission.user}`
        );
      }
    }

    //  Save and return
    return await this.logEntryRp.save(logEntry);
  }
}
