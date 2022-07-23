import { SubjectInterface } from './Subject';
import { SubjectSubdivisionInterface } from './SubjectSubdivision';
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

/**
 *  An association of `Subject`s and `SubjectSubdivision`s.
 */
export interface SubjectSubdivisionMapInterface {
  id: number;

  /** The subject. */
  subject: SubjectInterface;

  /** The subdivision. */
  subjectSubdivision: SubjectSubdivisionInterface;

  /** The sort order of the subdivision within the subject. */
  order: number;

  // subject: SubjectInterface;
  // subjectSubdivision: SubjectSubdivisionInterface;
}
