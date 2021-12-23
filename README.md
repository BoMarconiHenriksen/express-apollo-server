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

To see the implementation go to this commit <https://github.com/BoMarconiHenriksen/express-apollo-server/commit/2d25c9240e804a3709a2c6e15cd099180fb630c5>

```bash
yarn add apollo-server-express graphql graphql-tag @graphql-tools/schema
```

Go to <http://localhost:3000/graphql>

```graphql
query ExampleQuery {
  totalPosts
}
```

Returns:

```graphql
{
  "data": {
    "totalPosts": 25
  }
}
```

## Add Nodemon

```bash
yarn add nodemon -D
```

## Add Mongoose

yarn add mongoose mongoose-unique-validator

## Add User Type

```graphql
mutation CreateUser($input: UserInput!) {
  createUser(input: $input) {
    id
    firstName
    lastName
    addressOne
    postNumber
    city
    cellPhone
    email
    createdAt
    updatedAt
  }
}

```json
{
  "input": {
    "firstName": "Bo",
    "lastName": "Henriksen",
    "addressOne": "Højbjergvej 45",
    "postNumber": 1234,
    "city": "Copenhagen",
    "cellPhone": 123456,
    "email": "test@test.dk"
  }
}
```

get user by id
```graphql
query Query($userId: ID!) {
  user(id: $userId) {
    firstName
    lastName
  }
}
```

variable

```json
{
  "userId": "61a3b3887194725ca4d83586"
}
```

## Add Order Type

Create order

```graphql
mutation CreateOrder($input: OrderInput!) {
  createOrder(input: $input) {
    invoiceNumber
    orderNumber
    totalPrice
    vat
  }
}
```

Variables

```json
{
  "input": {
    "invoiceNumber": 2,
    "orderNumber": 2,
    "totalPrice": 20.95,
    "vat": 4.25
  }
}
```

get order by id

```graphql
query Order($orderId: ID!) {
  order(id: $orderId) {
    id
    invoiceNumber
    orderNumber
    totalPrice
    vat
    createdAt
    updatedAt
  }
}
```

Variables

```json
{
  "orderId": "61bd383fab258670d9403551"
}
```
