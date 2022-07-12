/**
 *  A geographical place which may be associated with a publication or its
 *  publisher.
 */
export default interface LocationInterface
{
  id: number;

  /**
   *  A unique identifier.
   *
   *  In MODS data:
   *    <originInfo><place type="text">
   */
  name: string;
}