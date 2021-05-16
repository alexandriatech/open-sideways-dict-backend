const { gql } = require("apollo-server-lambda");

const typeDefs = gql`
type Query {
  hello: String
}

type Mutation {
  authGoogle(accessToken: String!): User!
}

# -------------
# Types

type User {
  id: Int!
  token: String
  email: String!
  username: String!
  # role: String!
  # createdAt: Date!
  # updatedAt: Date!
  # words: [Word!]!
  # wordDefs: [WordData!]!
  # wordsDefsVotes: [Votes!]!
}
`;

module.exports = typeDefs;