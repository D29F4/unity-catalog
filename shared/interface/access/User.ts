import { QueryInterface } from '^interface/general/Query';


/**
 *  A user of the application.
 */
export interface UserInterface
{
  id: number;

  /** The unique screen/login name for the user. */
  username: string;

  /** The user's first name. */
  nameFirst: string;

  /** The user's last name. */
  nameLast: string;

  /** Any middle name. */
  nameMiddle: string;

  /** The user's e-mail address. */
  emailAddress: string;

  /** The user's Web address. */
  uri: string;

  /** Whether or not the user is active and able to access the application. */
  active?: boolean;

  /** The datetime of the record's creation. */
  createDttm?: Date;

  /** The user who created the record. */
  createUser?: UserInterface;

  /** The datetime of the record's last update. */
  updateDttm?: Date;

  /** The user who made the last update. */
  updateUser?: UserInterface;

  /**
   * The datetime of the record's deactivation.
   *
   * (`User`s are not deleted as relationships between `User`s and other data
   * may exist; they are simply made inactive.)
   */
  deactivateDttm?: Date;

  /** The user who (last) deactivated this one. */
  deactivateUser?: UserInterface;
}



/**
 *  Query parameters: users.
 */
export interface UserQueryInterface
{
  /** Whether or not the user is active and able to access the application. */
  active?: boolean;

  /** The unique screen/login name for the user. */
  username?: string;

  /** The user's first name. */
  nameFirst?: string;

  /** The user's last name. */
  nameLast?: string;

  /** Any middle name. */
  nameMiddle?: string;

  /** The user's e-mail address. */
  emailAddress?: string;

  /** The user's Web address. */
  uri?: string;

  /** The ID of the user who created the record. */
  createUser?: number;

  /** The ID of the user who made the last update. */
  updateUser?: number;

  /** The ID of the user who (last) deactivated this one. */
  deactivateUser?: number;

  /** Query options. */
  query: QueryInterface;
}
