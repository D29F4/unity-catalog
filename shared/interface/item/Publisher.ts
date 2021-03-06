/**
 *  A publisher of an `Item`.
 */
export interface PublisherInterface {
  id: number;

  /**
   *  The publisher's standard name.
   *
   *  In MODS data:
   *    <originInfo><publisher>
   */
  name: string;
}
