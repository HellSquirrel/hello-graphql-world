import React from "react";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { SchemaLink } from "apollo-link-schema";
import { makeExecutableSchema } from "graphql-tools";
import { ApolloProvider } from "@apollo/react-hooks";
import { graphql } from "graphql";
import numbers from "../data/numbers.json";

const typeDefs = `
  type Query {
    items: [Int]
  }
`;

const resolvers = {
  Query: {
    items: () => numbers
  }
};

const schema = makeExecutableSchema({ typeDefs, resolvers });

graphql(
  schema,
  `
    query {
      items
    }
  `
).then(result => console.log("Got result", result));

console.log(schema);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new SchemaLink({ schema })
});

const Provider = ({ children }) => (
  <ApolloProvider client={client}>{children}</ApolloProvider>
);

export default Provider;
