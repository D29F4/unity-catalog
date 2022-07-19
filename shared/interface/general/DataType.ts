/**
 *  Types of data which may have some notable role in the application.  The
 *  types ultimately point to the database entities representing the data.
 *  They may be setup elements (e.g., `ItemSource`), user-modifiable settings
 *  (e.g., `User` profiles), types of core content (e.g., `Item`), or the
 *  like.
 *
 *  Mainly expected to be used as contextual information in logging.
 */
export interface DataTypeInterface {
  id: number;

  /** The class name of the data type. */
  uid: string;

  /** A unique name for display. */
  name: string;

  /** Whether or not the event is available for current use. */
  active: boolean;
}
