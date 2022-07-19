// SPDX-License-Identifier: GPL-2.0-only
const appRootPath = require('app-root-path');
const path = require('path');
import * as dotenv from 'dotenv';
//dotenv.config({ path: [appRootPath, 'config', '.env'].join('/') });
dotenv.config({ path: path.join(appRootPath, 'config', '.env') });
import { Request, Response } from 'express';
const express = require('express');
const session = require('express-session');
import helmet from 'helmet';
//---------------------------------------------------------------------------
import dataSource from '^database/data-source';
import logger from '^logger';
//---------------------------------------------------------------------------
import { LogEntryWriteInterface } from '^interface/general/LogEntry';
import { User } from '^entity/access/User';
//---------------------------------------------------------------------------
const logService = require('^service/LogService');
//---------------------------------------------------------------------------
import accessController from '^controller/AccessController';
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

(async () => {
  //  Logging
  logger.info('Start');

  //  Expect environment variables
  if (!process.env.ENV) {
    throw new Error('Unable to access environment variables.');
  }

  //---------------------------------------------------------------------------
  //  Confirm database connection(s)
  //---------------------------------------------------------------------------
  const dsInitMsg = 'Data source initialization';
  await dataSource
    .initialize()
    .then(() => {
      logger.info(`${dsInitMsg}: success.`);
    })
    .catch((err: Error) => {
      throw new Error(`${dsInitMsg}: failure. ${err}`);
    });

  //---------------------------------------------------------------------------
  //  The Express application
  //---------------------------------------------------------------------------
  const app = express();

  //  Middleware
  //
  app.use(express.json());
  app.use(
    session({
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
    })
  );
  if (process.env.ENV === 'production') {
    app.use(helmet());
  }

  //  Controller routes
  //
  app.use('/api/access', accessController);

  //  Static serving of client
  //app.use('/', express.static(path.join(appRootPath, 'client', 'angular', 'index.js'));

  //---------------------------------------------------------------------------
  //  User
  //---------------------------------------------------------------------------
  //  Login
  //  (Currently not requiring authentication.  A /login route, etc. would be
  //  included in such an implementation.)
  //
  app.get('/', function (req: Request, res: Response) {
    //|FIX| Uncomment when session code is ready
    //  Regenerate the session to avoid fixation
    // req.session.regenerate(async (err: Error) => {
    //   if (err) {
    //     throw new Error('Regenerate the session: failure.');
    //   }
    //   //  Store user information in session
    //   //
    //   //req.session.user = req.body.user;
    //   req.session.user = await dataSource.getRepository(User).findOneBy({
    //     id: 1,
    //   });
    //   //  "Save the session before redirection to ensure page load does not
    //   //  happen before session is saved" (express-session).
    //   req.session.save(function (err: Error) {
    //     if (err) {
    //       throw new Error('Save the session: failure.');
    //     }
    //     // //  Log event
    //     // const logEntry: LogEntryWriteInterface = {
    //     // };
    //     logger.info(`User login: ID ${req.session.user.id}`);
    //   });
    // });
  });

  //---------------------------------------------------------------------------
  //  Listen
  //---------------------------------------------------------------------------
  const expressPort =
    typeof process.env.EXPRESS_PORT !== 'undefined'
      ? parseInt(process.env.EXPRESS_PORT, 10)
      : 3000;

  const listenMsg = ['Listening', `Port ${expressPort}`];
  app
    .listen(expressPort, () => {
      logger.info(`${listenMsg}: success.`);
    })
    .on('error', (err: Error) => {
      throw new Error(`${listenMsg}: failure. ${err}`);
    });

  //  Logging
  logger.info('End');
})();
