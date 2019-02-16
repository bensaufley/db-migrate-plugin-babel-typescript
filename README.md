# Plugin-Typescript

A `@babel/preset-typescript` plugin for db-migrate.

## Usage

This package isn't currently on npm because I'm just trying it out right now, so
if you somehow found this, you should install it (at your own risk) by referencing
this github repo in your package:

```json
"db-migrate-plugin-babel-typescript": "bensaufley/db-migrate-plugin-babel-typescript",
```

This plugin has a peer dependency on `@babel/core`, `@babel/register`, and
`@babel/preset-typescript`. You should be using those if you're trying to use this
plugin.

The plugin will automatically resolve and compile any `.ts` files in your migration
directory, using your regular `tsconfig.json`

Do however note that this has no effect on generating new migrations.
Using `db-migrate create FooMigrations.ts` will not create a TypeScript migration file.

## Implementation Detail

The plugin hooks into the functionality of `db-migrate` itself. In this case
it hooks into `migrator:migration:hook:require`, which in this case requires
another transpiler (Babel register) and registers also a new file extension
(.ts). Make sure to name your migrations accordingly (ending with .ts).
