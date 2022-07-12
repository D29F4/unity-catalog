const appRootPath = require('app-root-path');
const path = require('path');
const { config, createLogger, format, transports } = require('winston');
//  Cannot do either of these.  How utterly ridiculous.  Thanks, JavaScript/TypeScript.
//import urlJoin from 'url-join';
//let urlJoin; await import('url-join').then((module) => { urlJoin = module; });


/*
 *  Logging with winston
 *
 *  See also application documentation on logging.
 */
const pathToLog = [appRootPath, 'var' ,'log'];

const logger = createLogger({

  //  Output format
  format: format.combine(
    format.errors({ stack: true }),
    format.json(),
    format.splat(),
    format.timestamp(),
    //  Name of file triggering logging event
    format.label({ label: path.basename(process.mainModule.filename) }),
    format.printf(
      info => `${info.timestamp} ${info.level} (${info.label}): ${info.message}`
    ),
  ),

  //  Standard transports
  transports: [

    //  File (general)
    new transports.File({
      level: process.env.LOG_LEVEL_FILE || 'info',
      filename: pathToLog.concat(['app.log']).join('/'),
    }),

    //  File (errors)
    new transports.File({
      level: 'error',
      filename: pathToLog.concat(['app-error.log']).join('/'),
    }),
  ],

  exitOnError: false,
});

//---------------------------------------------------------------------------
//  Environment-specific transports
//---------------------------------------------------------------------------
if (process.env.ENV !== 'production') {
  logger.add(
    //  Console
    new transports.Console({
      level: process.env.LOG_LEVEL_CONSOLE || 'debug',
      format: format.colorize({ level: true }),
    }),
  );

} else {
  //  Handle `uncaughtException` events
  logger.exceptions.handle(
    new transports.File({
      filename: pathToLog.concat(['app-exception.log']).join('/'),
    })
  );

  //  Handle `uncaughtRejection` events
  logger.rejections.handle(
    new transports.File({
      filename: pathToLog.concat(['app-rejection.log']).join('/'),
    })
  );
}

export default logger;
