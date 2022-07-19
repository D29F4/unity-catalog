/**
 *  Parameters useful when issuing queries.
 */
export interface QueryInterface {
  /**
   *  Sorting prescription.
   *    attribute: the attribute to order
   *    direction: 0 = desc; 1 = asc
   */
  sort: {
    attribute: string;
    direction: number;
  }[];

  /** The total number of requested results per page. */
  limit: number;

  /** The page of results requested. */
  page: number;
}

/**
 *  Parameters for paginating query results.
 */
export interface PaginationInterface {
  /** The total number of results. */
  total: number;

  /** The total number of pages in results. */
  totalPages: number;

  /** The total number of requested results per page. */
  limit: number;

  /** The current page number. */
  currentPage: number;
}
