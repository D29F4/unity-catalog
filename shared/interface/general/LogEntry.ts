import { DataTypeInterface } from './DataType';
import { EventInterface } from './Event';
import { QueryInterface } from './Query';
import { UserInterface } from '../access/User';
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


/**
 *  An entry in the application log.
 */
export interface LogEntryInterface {
  id: number;

  /** The `Event` represented by the entry. */
  event: EventInterface;

  /** The `DataType` of any operand or subject of the event. */
  dataType?: DataTypeInterface;

  /** The ID of any operand. */
  operandId?: number;

  /** Additional context for the entry. */
  // detail?: {
  //   label: string;
  //   content: string;
  // }[]; //|FIX
  detail?: string;

  /** General commentary on the entry. */
  comment?: string;

  /**
   *  Any `User` performing the action/event represented by this entry.
   *
   *  A null value here would indicate an action performed by application
   *  logic, not a normal user.
   */
  user?: UserInterface | null;

  /** The datetime of the event represented by the entry. */
  eventDttm?: Date;
}



/**
 *  A submission to write a `LogEntry`.
 *  (See LogEntry for element descriptions.)
 */
export interface LogEntryWriteInterface {
  event: string;
  dataType?: string;
  operandId?: number;
  detail?: {
    label: string;
    content: string;
  };
  comment?: string;
  user?: number;
}



/**
 *  Query parameters: log entries.
 *  (See LogEntry for common element descriptions.)
 */
export interface LogEntryQueryInterface {
  event?: number;
  dataType?: number;
  operandId?: number;
  detail?: {
    label?: string;
    content?: string;
  };
  comment?: string;
  user?: number;

  /**
   *  The start of a date range.
   *
   *  @example 2001-02-21
   */
  fromDttm?: string;

  /**
   *  The end of a date range.
   *
   *  @example 2001-02-21
   */
  toDttm?: string;

  /** Query options. */
  query: QueryInterface;
}



/**
 *  The result of a log query.
 */
export interface LogEntryResultsInterface {

  /** The query results. */
  results: any[];

  /** The total number of rows found by the query. */
  totalCount: number;
}
