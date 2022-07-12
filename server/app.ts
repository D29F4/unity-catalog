// SPDX-License-Identifier: GPL-2.0-only
//
//
const appRootPath = require('app-root-path');
import * as dotenv from 'dotenv';
dotenv.config({ path: [appRootPath, 'config', '.env'].join('/') });
const express = require('express');
const session = require('express-session');
import helmet from 'helmet';
//|FIX|REMOVE|Cannot do either of these.  How utterly ridiculous.  Thanks, JavaScript/TypeScript.
//import urlJoin from 'url-join';
//let urlJoin; await import('url-join').then((module) => { urlJoin = module; });
//
import { dataSource } from './database/data-source';
import logger from './utility/Logger';
const logService = require('^service/LogService');
//
import User from '^entity/access/User';


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
  await dataSource.initialize()
    .then(() => {
      logger.info(`${dsInitMsg}: success.`);
    })
    .catch((err) => {
      throw new Error(`${dsInitMsg}: failure. ${err}`);
    });

  //---------------------------------------------------------------------------
  //  The Express application
  //---------------------------------------------------------------------------
  const app = express();

  //  Middleware
  //
  app.use(express.json());
  app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  }));
  if (process.env.ENV === 'production') {
    app.use(helmet());
  }

  //---------------------------------------------------------------------------
  //  User
  //---------------------------------------------------------------------------
  //  Login
  //  (Currently not requiring authentication.  A /login route, etc. would be
  //  included in such an implementation.)
  //
  app.get('/', function (req, res) {
    //  Regenerate the session to avoid fixation
    req.session.regenerate(async (err) => {
      if (err) {
        throw new Error('Regenerate the session: failure.');
      }

      //  Store user information in session
      //
      //req.session.user = req.body.user;
      req.session.user = await dataSource.getRepository(User).findOneBy({
        id: 1,
      });

      //  "Save the session before redirection to ensure page load does not
      //  happen before session is saved" (express-session).
      req.session.save(function (err) {
        if (err) {
          throw new Error('Save the session: failure.');
        }

        //  Log event
        const logEntry: LogEntryWriteInterface = {

        };

        logger.info(`User login: ID ${req.session.user.id}`);

      });
    });
  });

  //---------------------------------------------------------------------------
  //  Listen
  //---------------------------------------------------------------------------
  const expressPort = parseInt(process.env.EXPRESS_PORT, 10) || 3000;

  const listenMsg = ['Listening', `Port ${expressPort}`];
  app.listen(expressPort, () => {
    logger.info(`${listenMsg}: success.`);
  }).on('error', (err) => {
    throw new Error(`${listenMsg}: failure. ${err}`);
  });

  //  Logging
  logger.info('End');

})();


//|EOF