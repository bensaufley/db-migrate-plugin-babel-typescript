declare module 'db-migrate-plugin-babel-typescript' {
  import { EventEmitter } from 'events';

  export interface Types {
    BIG_INTEGER?: 'bigint';
    BIGINT?: 'bigint';
    BINARY?: 'binary';
    BLOB?: 'blob';
    BOOLEAN?: 'boolean';
    CHAR?: 'char';
    DATE_TIME?: 'datetime';
    DATE?: 'date';
    DECIMAL?: 'decimal';
    INTEGER?: 'int';
    REAL?: 'real';
    SMALL_INTEGER?: 'smallint';
    SMALLINT?: 'smallint';
    STRING?: 'string';
    TEXT?: 'text';
    TIME?: 'time';
    TIMESTAMP?: 'timestamp';
    [key: string]: string;
  }

  export type OnComplete = (
    migrator: unknown,
    internals: Internals,
    callback?: (err: Error | null | undefined, results?: unknown) => void,
    originalErr?: Error,
    results?: unknown
  ) => void;

  export type Hook =
    'init:api:addfunction:hook' | 'init:api:accessapi:hook' | 'migrator:migration:hook:require';

  export interface Plugin {
    name: string;
    hooks: Hook[];
    loadPlugin: () => void;
  }

  export interface DBM {
    dataType: Types;
    version: string;
  }

  export interface MigrationOptions {
    dbmigrate: DBM;
    dryRun: boolean;
    cwd: string;
    noTransactions: boolean;
    verbose: boolean;
    type: DBM['dataType'];
    log: log;
    ignoreOnInit: boolean;
    Promise: typeof Promise;
  }

  export interface Internals {
    cmdOptions?: object;
    configFile?: string;
    configObject?: object;
    currentEnv?: string;
    cwd: string;
    dbm: DBM;
    isModule?: unknown;
    migrationOptions: MigrationOptions;
    migrationProtocol: number;
    onComplete: OnComplete;
    plugins: Plugin[];
    safeOptions: MigrationOptions;
  }

  export interface ConnectionParameters {
    binary: boolean;
    client_encoding: string;
    database: string;
    host: string;
    isDomainSocket: boolean;
    password: string | null;
    port: number;
    query_timeout: boolean;
    ssl: boolean;
    statement_timeout: boolean;
    user: string;
  }

  export interface DB {
    connection: {
      activeQuery: unknown | null;
      binary: boolean;
      connection: unknown;
      connectionParameters: ConnectionParameters;
      database: string;
      hasExecuted: boolean;
      host: string;
      password: string | null;
      port: number;
      processID: number;
      queryQueue: unknown[];
      readyForQuery: boolean;
      secretKey: number;
      ssl: boolean;
      user: string;
    }
    eventEmitter: EventEmitter;
    internals: Internals;
    log: {
      isSilent: boolean;
    };
    type: Types;
    schema: string;
  }
}
