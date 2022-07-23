import { ItemSchemaInterface } from './ItemSchema';
import { ItemInterface } from './Item';
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

/**
 *  Information about available sources of `Item` data.
 */
export interface ItemSourceInterface {
  id: number;

  /** The full and unique name of the source. */
  name: string;

  /** A longer description of the source. */
  description?: string | null;

  /** A general URI for the source.  For user reference. */
  uriHome?: string | null;

  /** A URI for API documentation. (Not for querying.) */
  uriApiDoc?: string | null;

  /** The base API URI for querying. */
  uriApiBase?: string | null;

  /** Whether or not the source may provide new records. */
  active: boolean;

  /**
   *  Whether or not `Item`s associated with the source are available for
   *  querying, viewing, and editing.
   */
  itemsActive: boolean;

  /** The datetime of the record's creation. */
  createDttm: Date;

  /** The datetime of the record's last update. */
  updateDttm: Date;

  /** The data schema used by this source. */
  itemSchema: ItemSchemaInterface;

  /** Items having this source. */
  item: ItemInterface[];
}
