import { Request, Response } from 'express';
const express = require('express');
const path = require('path');
//---------------------------------------------------------------------------
const accessService = require('^service/AccessService');
const logService = require('^service/LogService');
//---------------------------------------------------------------------------
import { LogEntryWriteInterface } from '^interface/general/LogEntry';
import { UserInterface, UserQueryInterface } from '^interface/access/User';
import { User } from '^entity/access/User';
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

/**
 *  Controller for privilege-control.
 */
//export class AccessController // extends AbstractController
//{
//const path = path.join(this.apiPathStart, 'access');

//  The Express router
const router = express.Router();

/**
 *  Get an individual user.
 *
 *  @param id - The ID of the requested user.
 */
router.get(`/user/:id(\d+)`, async (req: Request, res: Response) => {
  const testing = await accessService.userGet(req.params.id);
  res.json(testing);
});

/*
 *  Chained routes.
 */
router
  .route(`/user`)

  /**
   *  Get users by search parameters.
   *  @param req.query - Search parameters.
   */
  .get(async (req: Request, res: Response) => {
    // http://.../api/access/user?aa=1&bb=z&cc=0 = req.query.aa, etc.
    //|FIX
    // let params: UserQueryInterface = req.query;
    // res.json(await accessService.usersGet(params));
  })

  /**
   *  Create a user.
   *  @param req.body.data.user - User attributes.
   */
  .post(async (req: Request, res: Response) => {
    //  The requesting user
    const reqUser = req.body.user;

    //  The user data submitted
    const submission: UserInterface = req.body.data.user;

    //  Create user
    const user: User = await accessService.userCreate(submission);

    //  Log event
    logService.logWrite({
      event: 'create',
      dataType: 'User',
      operandId: user.id,
      user: reqUser.id,
    } as LogEntryWriteInterface);

    //  Return
    res.json(user);
  })

  /**
   *  Update a user.
   *  @param req.body.data.user - User attributes.
   */
  .put(async (req: Request, res: Response) => {
    //  The requesting user
    const reqUser = req.body.user;

    //  The user data submitted
    const submission: UserInterface = req.body.data.user;

    //  Update user
    const user: User = await accessService.userUpdate(submission);

    //  Log event
    logService.logWrite({
      event: 'update',
      dataType: 'User',
      operandId: user.id,
      user: reqUser.id,
    } as LogEntryWriteInterface);

    //  Return
    res.json(user);
  });
//}

export default router;
