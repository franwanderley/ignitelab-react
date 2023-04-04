import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.hygraph.com/v2/clg22y0gk013f01t3e4tp031d/master',
  cache: new InMemoryCache()
});