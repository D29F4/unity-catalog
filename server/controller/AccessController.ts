import { Request, Response } from 'express';
//
const accessService = require('^service/AccessService');
const logService = require('^service/LogService');
//
import { LogEntryWriteInterface } from '^interface/general/LogEntry';
import { UserQueryInterface } from '^interface/access/User';


/**
 *  Controller for privilege-control.
 */
class AccessController extends AbstractController
{
  const path = this.apiPathComponents.concat(['access']).join('/');


  /**
   *  Get an individual user.
   *
   *  @param id - The ID of the requested user.
   */
  app.get(`${path}/user/:id`, async ((req: Request, res: Response) => {
    res.json(this.accessService.getUser(req.params.id));
  }));



  /**
   *  Get users by search parameters.
   *
   *  @param req.query - Search parameters.
   */
  app.get(`${path}/user`, async ((req: Request, res: Response) => {
    // http://.../api/access/user?aa=1&bb=z&cc=0 = req.query.aa, etc.
    let params: UserQueryInterface = req.query;
    res.json(this.accessService.getUsers(params));
  }));



  /**
   *  Create a user.
   *
   *  @param req.body.data.user - User attributes.
   */
  app.post(`${path}/user`, async ((req: Request, res: Response) => {
    //  The requesting user
    const reqUser = req.body.user;

    //  The user data submitted
    const submission: UserInterface = req.body.data.user;

    //  Create user
    const user: User = await accessService.createUser(submission);

    //  Log event
    logService.writeLog({
      event: 'create',
      dataType: 'User',
      operandId: user.id,
      user: reqUser.id,
    } as LogEntryWriteInterface);

    //  Return
    res.json(user);
  }));



  /**
   *  Update a user.
   *
   *  @param req.body.data.user - User attributes.
   */
  app.put(`${path}/user`, async ((req: Request, res: Response) => {
    //  The requesting user
    const reqUser = req.body.user;

    //  The user data submitted
    const submission: UserInterface = req.body.data.user;

    //  Update user
    const user: User = await accessService.updateUser(submission);

    //  Log event
    logService.writeLog({
      event: 'update',
      dataType: 'User',
      operandId: user.id,
      user: reqUser.id,
    } as LogEntryWriteInterface);

    //  Return
    res.json(user);
  }));
}
