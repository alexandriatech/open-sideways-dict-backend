require("dotenv").config();
const fs = require("fs");
const path = require("path");
const { ApolloServer, gql } = require("apollo-server-express");
const jwt = require("jsonwebtoken");
const resolvers = require("./resolvers");
const typeDefs = fs.readFileSync(path.join(__dirname, "./schema.gql"), "utf8");
const { isAuthenticated } = require("./utils");
const { IS_AUTHENTICATED_CONTEXT } = require("../constants");

const isDev = process.env.NODE_ENV === 'development'

const context = ({ req, res }) => {
  const token = req.headers.authorization;
  const currentUser = !!token && jwt.verify(token, process.env.JWT_SECRET);

  return {
    req,
    res,
    currentUser,
    [IS_AUTHENTICATED_CONTEXT]: isAuthenticated(currentUser),
  };
};

const onConnect = async (_) => true;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context,
  introspection: isDev,
  playground: isDev,
  subscriptions: { onConnect },
});

module.exports = server;
