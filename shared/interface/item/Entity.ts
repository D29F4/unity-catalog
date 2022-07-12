import EntityTypeInterface from '^interface/item/EntityType';

/**
 *  A person, group, or other agent identified as an author, editor, or other
 *  type of creator or contributor.  Basically, an authority record for such
 *  agents.
 *
 *  Avoiding conflation of entities with the same name can be tricky when one
 *  may have relatively little additional data.  We shall try to determine
 *  uniqueness by taking a combination of all attributes.
 *
 *  Information about the entity's role in any particular work is currently
 *  not sought.
 */
export default interface EntityInterface
{
  id: number;

  /**
   *  The full name of the entity in whatever form in which it may be
   *  obtained from a bibliographic source.
   */
  name: string;

  /**
   *  A string indicating the lifetime of the entity, which usually contains
   *  an initial year and (where appropriate) a final year.
   */
  dates: string;

  /**
   *  The LoC's Linked Data Services identifier.
   *  https://id.loc.gov/
   */
  ldsId: string;

  /**
   *  The Virtual International Authority File identifier.
   *  https://viaf.org/
   */
  viafId: string;

  /**
   *  Distinct entities may possess the same values for all known attributes.
   *  (E.g., several authors in the system may happen to have the same name.
   *  Since lifetime dates are also tracked here such collisions may be
   *  relatively rare; but they become more likely if the entity in question
   *  is an organization or if the source does not supply dates.)  This
   *  attribute, by acting as a distinguishing integer, provides a means of
   *  keeping them distinct within this database.
   */
  instance: number;

  /** The type of entity. */
  entityType: EntityTypeInterface;
}