import { Response } from 'express';
//---------------------------------------------------------------------------
import logger from './Logger';
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

/**
 *  Abstracted methods for responses.
 */
export class HttpResponse {
  statusCodes: Record<string, string> = {
    '403': 'Forbidden',
    '404': 'Not Found',
    '410': 'Resource Gone',
    '503': 'Service Unavailable',
  };

  /**
   * Generic method for sending special responses.
   *
   * @param statusCode - The HTTP status code with which to respond.
   * @param response - The response.
   * @param msg - Any contextual message.
   * @param err - Any accompanying Error.
   */
  protected returnResponse(
    statusCode: number,
    response: Response,
    msg: string,
    err: Error | null = null
  ) {
    //  Log 500-level responses
    if (statusCode >= 500) {
      logger.error(`Error: ${statusCode}. ` + (err ?? ''));
    }

    //  Return response
    return response.status(statusCode).send({
      msg: [this.statusCodes[statusCode.toString()], msg].join(),
    });
  }
}
