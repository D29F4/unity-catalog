const appRootPath = require('app-root-path');
import 'reflect-metadata';
import { DataSource, LoggerOptions } from 'typeorm';
//  Thanks for that documentation on namingStrategy, TypeORM.
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';


//---------------------------------------------------------------------------
//  Set up logging
//---------------------------------------------------------------------------
let logging: LoggerOptions = ['error', 'migration'];
if (process.env.ENV !== 'prod') {
  logging.push('warn', 'info');
}

//---------------------------------------------------------------------------
//  TypeORM data-source configuration.
//---------------------------------------------------------------------------
export const dataSource = new DataSource(
{
  //  Simply hardcoding database type due to typing.
  //  Questionable management: https://github.com/typeorm/typeorm/issues/949#issuecomment-357624706
  type:           'mysql',
  host:           process.env.DB_HOST,
  port:           parseInt(process.env.DB_PORT, 10),
  username:       process.env.DB_USERNAME,
  password:       process.env.DB_PASSWORD,
  database:       process.env.DB_DATABASE,
  logging:        logging,
  synchronize:    process.env.DB_SYNCHRONIZE === 'true',
  namingStrategy: new SnakeNamingStrategy(),
  entities: [
    'database/entity/*.ts',
  ],
  migrations: [
    'database/migration/*.ts',
  ],
  //  TypeORM documentation lies?
  //  (Compare https://typeorm.io/data-source-options#common-data-source-options and
  //  https://github.com/typeorm/typeorm/blob/master/src/data-source/BaseDataSourceOptions.ts.)
  // cli: {
  //   entitiesDir: 'database/entity',
  //   migrationsDir: 'database/migration',
  // }
});
