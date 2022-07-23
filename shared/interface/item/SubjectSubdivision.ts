import { EntityInterface } from './Entity';
import { SubjectHeadingInterface } from './SubjectHeading';
import { SubjectSubfieldInterface } from './SubjectSubfield';
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

/**
 *  A combination of `SubjectSubfield`s and `SubjectHeading`s.
 *
 *  A `Subject` contains one or more `SubjectSubdivision`s in a fixed order.
 *
 *  Examples from the LoC:
 *    * topic      = Biography
 *    * geographic = Great Britain
 *    * temporal   = 20th century
 *
 *  "name" is a valid subfield and will point to an `Entity`
 *  instead of provide an ordinary heading.
 */
export interface SubjectSubdivisionInterface {
  id: number;

  /** The subfield. */
  subfield: SubjectSubfieldInterface;

  /** The heading (if appropriate). */
  heading: SubjectHeadingInterface;

  /** The entity (if appropriate). */
  entity: EntityInterface;
}
