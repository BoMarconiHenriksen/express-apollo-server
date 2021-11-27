# express-apollo-server

This repository shows how to setup ExpressJS and Apollo Server Express.

## Create Express Server

```bash
npx express-generator apollo-server
cd apollo-server
yarn

yarn start
http://localhost:3000/
``` 

## ES6 Modules

Since Node version 14.x ES modules are officially supported and stable <https://nodejs.org/docs/latest-v14.x/api/esm.html#esm_modules_ecmascript_modules> - So it's possible to use ES6's import instead of require.

This repository has been setup to use ES6 modules.

Checkout this commit to see the changes <https://github.com/BoMarconiHenriksen/express-apollo-server/commit/81b4799682a78cbb5bbf59bed9e148e8bf08ebba>

## Add Apollo Server

yarn add @graphql-tools/schema apollo-server-express graphql graphql-tag
