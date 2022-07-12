import { getRepository } from 'typeorm';
//
import { dataSource } from '^database/data-source';
import { AbstractService } from '^service/AbstractService';
//
import { LogEntryQueryInterface, LogEntryWriteInterface } from '^interface/LogEntry';
import DataType from '^entity/DataType';
import Event from '^entity/Event';
import LogEntry from '^entity/LogEntry';
import User from '^entity/User';


/**
 *  Service for the application log.
 */
export class LogService extends AbstractService
{
  const logEntryRp = dataSource.getRepository(LogEntry);


  /**
   *  Get events present in log.
   *  (To populate query form.)
   *
   *  @returns `Event`[]
   */
  async getLogEvents(): Promise<EventInterface[]> {
    return await getRepository(Event)
      .createQueryBuilder('event')
      .leftJoin('event.logEntry', 'logEntry')
      .where('logEntry.id IS NOT NULL')
      . distinct(true)
      . getMany();
  }



  /**
   *  Get performing users present in log.
   *  (To populate query form.)
   *
   *  @returns `User`[]
   */
  async getLogUsers(): Promise<UserInterface[]> {
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
  async getLogDataTypes(): Promise<DataTypeInterface[]> {
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
  async queryLogEntry(params: LogEntryQueryInterface): Promise<LogEntryResultsInterface[]> {

    const qb = getRepository(LogEntry)
      .createQueryBuilder('log')
      .leftJoinAndSelect('log.event', 'event')
      .leftJoinAndSelect('log.dataType', 'dataType')
      .leftJoinAndSelect('log.user', 'user');

    //  Where: (various attributes)
    ['event', 'dataType', 'operandId', 'comment', 'user']
      .forEach((attr) => {
        if (exprDefined(params[attr])) {
          qb.andWhere(`log.${attr} = :id`, { id: params[attr] });
        }
      });

    //  Where: detail

    //  Where: dates
    [['fromDttm', '>='], ['toDttm', '<=']]
      .forEach((each, index) => {
        const [attr, comparison] = each;
        if (exprDefined(params[attr])) {
          qb.andWhere(
            `log.eventDttm ${comparison} :v`,
            { v: params[attr] + ' ' + (index ? '23:59:59' : '00:00:00') }
          );
        }
      });

    //  Pagination
    qb.take(params.query.limit)
      .skip((params.query.page - 1) * params.query.limit);

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
  async writeLogEntry(submission: LogEntryWriteInterface): Promise<LogEntryInterface> {
    const logEntry = new LogEntry();

    //  Get expected parameters by UID
    //
    for (const param of [['dataType', DataType], ['event', Event]]) {
      const [attr, entityClass] = param;
      logEntry[attr] = await dataSource.getRepository(entityClass).findOneBy({
        uid: submission[attr],
        active: true,
      });

      if (!logEntry[entityClass]) {
        throw new Error(`Entity for ${attr} not found; requested: ${submission[attr]}`);
      }
    }

    //  Save the operand ID if provided
    if (submission.operandId) {
      logEntry.operandId = submission.operandId;
    }

    //  Get the acting user if provided
    //
    if (submission.user) {
      logEntry.user: User = dataSource.getRepository(User).findOneBy({
        id: submission.user
      });
      if (!user) {
        throw new Error(`Entity for ${attr} not found; requested: ${submission[attr]}`);
      }
    }

    //  Save and return
    return await logEntryRp.save(logEntry);
  }
}
