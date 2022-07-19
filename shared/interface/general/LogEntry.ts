import { DataTypeInterface } from '^interface/general/DataType';
import { EventInterface } from '^interface/general/Event';
import { QueryInterface } from '^interface/general/Query';
import { UserInterface } from '^interface/access/User';
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
  detail?: {
    label: string;
    content: string;
  }[];

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
 */
export interface LogEntryWriteInterface {
  /** The UID of the `Event` represented by the entry. */
  event: string;

  /** The UID of the `DataType` of any operand or subject of the event. */
  dataType?: string;

  /** The ID of any operand. */
  operandId?: number;

  /** Additional context for the entry. */
  detail?: {
    label: string;
    content: string;
  };

  /** General commentary on the entry. */
  comment?: string;

  /** The ID of any `User` performing the action/event represented by this entry. */
  user?: number;
}

/**
 *  Query parameters: log entries.
 */
export interface LogEntryQueryInterface {
  /** The ID of the `Event`. */
  event?: number;

  /** The ID of the `DataType`. */
  dataType?: number;

  /** The ID of any operand. */
  operandId?: number;

  /** Additional context. */
  detail?: {
    label?: string;
    content?: string;
  };

  /** General commentary. */
  comment?: string;

  /** Any `User` performing the action/event. */
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
