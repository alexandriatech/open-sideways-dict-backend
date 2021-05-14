require("dotenv").config();
const { ApolloServer } = require("apollo-server-lambda");
const jwt = require("jsonwebtoken");
const resolvers = require("./graphql/resolvers");
const typeDefs = require('./graphql/schema')
const { isAuthenticated } = require("./graphql/utils");
const { IS_AUTHENTICATED_CONTEXT } = require("./graphql/constants");

const context = ({ event, ...other }) => {
  const token = event.headers.authorization;
  const currentUser = !!token && jwt.verify(token, process.env.JWT_SECRET);

  return { event, ...other, [IS_AUTHENTICATED_CONTEXT]: isAuthenticated(currentUser) }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context
});

exports.handler = server.createHandler();