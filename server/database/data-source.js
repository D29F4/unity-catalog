"use strict";
exports.__esModule = true;
exports.dataSource = void 0;
var appRootPath = require('app-root-path');
var dotenv = require('dotenv');
require("reflect-metadata");
var typeorm_1 = require("typeorm");
//  Thanks for that documentation on namingStrategy, TypeORM.
var typeorm_naming_strategies_1 = require("typeorm-naming-strategies");
//---------------------------------------------------------------------------
//  Get application environment variables
//---------------------------------------------------------------------------
var envResult = dotenv.config({
    path: [appRootPath, 'config', '.env'].join('/')
});
if (envResult.error) {
    throw envResult.error;
}
//---------------------------------------------------------------------------
//  Set up logging
//---------------------------------------------------------------------------
var logging = ['error', 'migration'];
if (process.env.ENV !== 'prod') {
    logging.push('warn', 'info');
}
//---------------------------------------------------------------------------
//  TypeORM data-source configuration.
//---------------------------------------------------------------------------
exports.dataSource = new typeorm_1.DataSource({
    //  Simply hardcoding database type due to typing.
    //  Lovely attitude: https://github.com/typeorm/typeorm/issues/949#issuecomment-357624706
    type: 'mysql',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT, 10),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    logging: logging,
    synchronize: process.env.DB_SYNCHRONIZE === 'true',
    namingStrategy: new typeorm_naming_strategies_1.SnakeNamingStrategy(),
    entities: [
        'database/entity/*.ts',
    ],
    migrations: [
        'database/migration/*.ts',
    ]
});
