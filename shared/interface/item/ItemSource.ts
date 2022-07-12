import ItemSchemaInterface from '^interface/item/ItemSchema';

/**
 *  Information about available sources of `Item` data.
 */
export default interface ItemSourceInterface
{
  id: number;

  /** The full and unique name of the source. */
  name: string;

  /** A longer description of the source. */
  description: string;

  /** A general URI for the source.  For user reference. */
  uriHome?: string;

  /** A URI for API documentation. (Not for querying.) */
  uriApiDoc?: string;

  /** The base API URI for querying. */
  uriApiBase?: string;

  /** Whether or not the source may provide new records. */
  active: boolean;

  /**
   *  Whether or not `Item`s associated with the source are available for
   *  querying, viewing, and editing.
   */
  itemsActive: boolean;

  /** The datetime of the record's creation. */
  createdDttm: Date;

  /** The datetime of the record's last update. */
  updatedDttm: Date;

  /** The data schema used by this source. */
  itemSchema: ItemSchemaInterface;
}