/**
 *  Means by which a User may come to no longer be in possession of an Item.
 */
export default interface ItemOwnershipFateInterface
{
  id: number;

  /** A unique term describing the cirumstances. */
  name: string;
}
