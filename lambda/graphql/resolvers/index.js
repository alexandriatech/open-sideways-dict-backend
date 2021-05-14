// const Query = require("./Query");
// const Mutation = require("./Mutation");
// const otherResolvers = require("./Other");

// const resolvers = {
//   ...otherResolvers,
//   Query: { ...Query },
//   Mutation: { ...Mutation },
// };

const resolvers = {
  Query: {
    hello: (parent, args, context) => {
      return "Hello, world!";
    }
  }
};

module.exports = resolvers;
