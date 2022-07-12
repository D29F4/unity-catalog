import { Response } from 'express';
//
import logger from '^utility/Logger';


/**
 *  Abstract controller.
 */
abstract class AccessController
{
  //  Initial API path
  const apiPathComponents = ['/api'];


  /**
   * Generic method for sending special responses.
   *
   * @param statusCode - The HTTP status code with which to respond.
   * @param response - The response.
   * @param msg - Any contextual message.
   * @param err - Any accompanying Error.
   */
  protected returnResponse(statusCode: number, response: Response, msg: string, err: Error = null) {
    //  Log 500-level responses
    if (statusCode >= 500) {
      logger.error(`Error: ${statusCode}. ` + (err ?? ''));
    }

    //  Return response
    return response.status(statusCode).send();
  }
}