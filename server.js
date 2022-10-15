const { ApolloServer, gql } = require("apollo-server");
const { readFileSync } = require("fs");
const { resolvers } = require("./resolver");

const typeDefs = gql(readFileSync("./schema.graphql", "utf-8"));

const server = new ApolloServer({ typeDefs, resolvers });

server
  .listen()
  .then(({ url }) => console.log(`The server is running at ${url}`));
