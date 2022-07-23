import { Request, Response } from 'express';
const express = require('express');
//---------------------------------------------------------------------------
import accessService from '../service/AccessService';
import logService from '../service/LogService';
import logger from '../utility/Logger';
//---------------------------------------------------------------------------
import { LogEntryWriteInterface } from '../../shared/interface/general/LogEntry';
import {
  UserCreateInterface,
  UserUpdateInterface,
  UserQueryInterface
} from '../../shared/interface/access/User';
import { User } from '../database/entity/access/User';
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


/*
 *  Controller for privilege-control.
 */
//  The Express router
const router = express.Router();



/**
 *  Get an individual user.
 *
 *  @param id - The ID of the requested user.
 */
router.get('/user/:id(\\d+)', async (req: Request, res: Response, next) => {

  const user = await accessService.userGet(Number(req.params.id));

  if (!user) {
    next(new Error('User not found.'));
    return;
  }

  res.json(user);
});



/*
 *  Chained routes.
 */
router.route(`/user`)

  /**
   *  Get users by search parameters.
   *
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
   *
   *  @param req.body - User attributes.
   */
  .post(async (req: Request, res: Response) => {

    //  The user data submitted
    const submission: UserCreateInterface = req.body;

    //  Create user
    const user: User = await accessService.userCreate(submission);

    //  Log event
    logService.logEntryWrite({
      event: 'create',
      dataType: 'User',
      operandId: user.id,
      user: null, //|FIX
    } as LogEntryWriteInterface);

    //  Return
    res.json(user);
  })



  /**
   *  Update a user.
   *
   *  @param req.body - User attributes.
   */
  .put(async (req: Request, res: Response) => {

    //  The user data submitted
    const submission: UserUpdateInterface = req.body;

    //  Update user
    const user: User = await accessService.userUpdate(submission);

    //  Log event
    logService.logEntryWrite({
      event: 'update',
      dataType: 'User',
      operandId: user.id,
      user: null, //|FIX
    } as LogEntryWriteInterface);

    //  Return
    res.json(user);
  });
//}


export default router;
