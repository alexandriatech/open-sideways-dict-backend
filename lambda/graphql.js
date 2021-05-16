require("dotenv").config();
const { ApolloServer } = require("apollo-server-lambda");
const jwt = require("jsonwebtoken");
const resolvers = require("./graphql/resolvers");
const typeDefs = require('./graphql/schema')
const { isAuthenticated } = require("./graphql/utils");
const { IS_AUTHENTICATED_CONTEXT } = require("./graphql/constants");
const connectToMongoDB = require("./graphql/db");

const context = async ({ event, ...other }) => {
  const token = event.headers.authorization;
  const currentUser = !!token && jwt.verify(token, process.env.JWT_SECRET);
  // initialize connection to db in the context so we can use it in our resolvers without passing it around
  const db = await connectToMongoDB();

  return { event, ...other, [IS_AUTHENTICATED_CONTEXT]: isAuthenticated(currentUser), db }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context
});

exports.handler = server.createHandler();