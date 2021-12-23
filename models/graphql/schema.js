import gql from "graphql-tag";
import { makeExecutableSchema } from "@graphql-tools/schema";
import UserTypes from './types/userType.js'
import userResolvers from './resolvers/userResolver.js'
import OrderType from './types/orderType.js'
import orderResolver from "./resolvers/orderResolver.js";

const schema = {
  typeDefs: gql`
  ${ UserTypes }
  ${ OrderType }
  `,
  resolvers: {
    Query: {
      ...userResolvers.Query,
      ...orderResolver.Query
    },
    Mutation: {
      ...userResolvers.Mutation,
      ...orderResolver.Mutation
    }
  }
}

export default makeExecutableSchema(schema);
