import { ItemResourceTypeInterface } from '^interface/item/ItemResourceType';
import { ItemSourceInterface } from '^interface/item/ItemSource';
import { UserInterface } from '^interface/access/User';
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

/**
 *  The abstract form of an item.
 */
export interface AbstractItemInterface {
  id: number;

  /** The resource type of the item. */
  resourceType: ItemResourceTypeInterface;

  /** The source of the item data. */
  source: ItemSourceInterface;

  /** The datetime of the record's creation. */
  createDttm: Date;

  /** The User who created the record. */
  createUser: UserInterface;

  /** The datetime of the record's last update. */
  updateDttm: Date;

  /** The User who made the last update. */
  updateUser: UserInterface;
}
