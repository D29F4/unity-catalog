/**
 *  Notable events which may occur or actions which may be performed by
 *  users.
 *
 *  Expected to be used in logging.
 */
export interface EventInterface {
  id: number;

  /** A unique identifier. */
  uid: string;

  /** The display name of the event. */
  name: string;

  /** Whether or not the event is available for current use. */
  active: boolean;
}
