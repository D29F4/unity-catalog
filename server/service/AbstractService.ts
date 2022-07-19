/**
 *  Service for the application log.
 */
export abstract class AbstractService {
  /**
   *  Tests expression.
   *
   *  Note that this will return `false` for expressions which happen to be 0
   *  or other falselike values.  In some situations calling functions may
   *  actually want to consider such values valid so use with caution.
   *
   *  @returns True if defined and truthlike.
   */
  exprDefined(expr: any): boolean {
    return typeof expr !== 'undefined' && expr;
  }
}
