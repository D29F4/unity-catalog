import LccClass from '^interface/item/LccClass';

/**
 *  Library of Congress Classification subclasses.
 */
export interface LccSubclassInterface
{
  id: string;

  /** The name/code of the subclass. */
  name: string;

  /** A longer description. */
  description: string;

  /** The parent LCC class. */
  lccClass: LccClassInterface;
}
