# Packages

Reference listing of installed Node.js packages to try to keep these things
straight.

<!-- ~~~~~~~~~~~~~~~~~~~~ Server ~~~~~~~~~~~~~~~~~~~~ -->

## Server

### Production dependencies

#### Configuration

- dotenv (for .env access)

#### Convenience

- app-root-path

#### Database ORM

Installed by `typeorm`:

- mysql2 (replacing the default mysql)
- reflect-metadata
- typeorm

Other:

- typeorm-naming-strategies

#### Logging

- winston

#### Process management

- pm2

#### Web framework

- express
- express-session
- helmet


### Development dependencies

#### Convenience

We would like some sane means of specifying path aliases for imports.  Some
packages claim to do what TypeScript emptily promises with the `paths` option
in the tsConfig compilerOptions.  Endless amounts of time and energy have
been spent on trying to get something to work with no useful results.  Import
paths will therefore remain unwieldy and inconvenient.

#### Language

- @tsconfig/node16 (standardized base tsconfig.json)
- typescript

#### Linting

- ...

#### Process

- concurrently (running development processes)

#### Typing

Various `@types` packages for dependencies.

<!-- ~~~~~~~~~~~~~~~~~~~~ Client ~~~~~~~~~~~~~~~~~~~~ -->

## Client

### Production dependencies

#### Framework

Installed by `angular`:

- Various `@angular` packages.
- rxjs
- tslib
- zone.js

#### Testing

- jasmine-core
- karma
- karma-\*

#### User interface

- bootstrap

### Development dependencies

#### Language

- typescript

#### Typing

Various `@types` packages for dependencies.

<!-- |EOF -->
