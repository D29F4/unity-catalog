/**
 *  Information about available data schemas used by `ItemSource`s.
 *
 *  Important:
 *
 *    * It is expected that the schema dictates the method of constructing
 *      API queries.
 *
 *    * The application's API functionality will need to recognize the `uid`
 *      in order to properly perform queries.
 */
export interface ItemSchemaInterface {
  id: number;

  /** A unique identifier. */
  uid: string;

  /** The full and unique name of the schema. */
  name: string;

  /** A longer description of the schema. */
  description: string;
}
