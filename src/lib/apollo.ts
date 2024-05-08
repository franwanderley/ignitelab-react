import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: import.meta.env.HIGRAPH_URI,
  cache: new InMemoryCache()
});