/**
 *  A term categorizing an `Entity`.
 *
 *    <name type="personal" usage="primary">
 *
 *  The LoC, e.g., has types such as "personal", "corporate", and
 *  "conference".
 */
export interface EntityTypeInterface {
  id: number;

  /** The type's unique name. */
  name: string;
}
