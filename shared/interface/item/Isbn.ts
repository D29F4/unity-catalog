import ItemInterface from '^interface/item/Item';

/**
 *  ISBN codes attached to `Item`s.
 *
 *  ISBNs exist on their own table because `ItemSource`s like the LoC may
 *  associate more than one ISBN with a record.
 */
export default interface IsbnInterface
{
  id: number;

  /** The item with which the ISBN is associated. */
  item: ItemInterface;

  /**
   *  The full ISBN string provided by an `ItemSource`.  May contain more
   *  than the ISBN itself.  The `isbn` field contains the core string.
   *
   *  In MODS data:
   *    <identifier type="isbn">  (Ignore tags with attribute: invalid="yes".)
   */
  isbnFull: string;

  /** The proper ISBN. */
  isbn: string;
}
