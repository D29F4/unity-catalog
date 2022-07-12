import ItemInterface from '^interface/item/Item';
import ItemOwnershipFateInterface from '^interface/item/ItemOwnershipFate';
import UserInterface from '^interface/access/User';

/**
 *  A `User`'s personal metadata attached to an `Item`.
 */
export default interface ItemUserDataInterface
{
  id: number;

  /** The item in question. */
  item: ItemInterface;

  /** The user in question. */
  user: UserInterface;

  /** The date on which the item was acquired. */
  ownershipStartDt: Date;

  /** The date on which the user's ownership of the item ended. */
  ownershipEndDt: Date;

  /**
   *  Whether or not the User currently possesses the Item.
   *
   *  (A value separate from `ownershipEndDt` is convenient for querying and
   *  sorting.)
   */
  isOwned: boolean;

  /**
   *  How the user came to no longer own the item if once but no longer in
   *  possession.
   */
  fate?: ItemOwnershipFateInterface;

  /**
   *  A free-form field offering a place for the user to indicate the subset
   *  of volumes owned if the `Item` record represents a multivolume work.
   *
   *  If this element deserves more specificity and attention then it could
   *  be replaced by a specialized data type or format.
   */
  volumes: string;

  /** Free-form notes or comments on the item. */
  notes: string;

  /** One or more URIs associated with the item. */
  uri: JSON;

  /** The datetime of the record's last update. */
  updatedDttm: Date;
}
