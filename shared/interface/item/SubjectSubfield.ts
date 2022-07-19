/**
 *  A subfield of a `Subject`.
 *
 *  Examples from the LoC: "topic", "geographic", "temporal".
 */
export interface SubjectSubfieldInterface {
  id: number;

  /** The name of the subfield. */
  name: string;

  /** Whether or not the subfield points to an `Entity`. */
  isEntity: boolean;
}
