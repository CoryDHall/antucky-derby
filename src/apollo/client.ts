import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from 'apollo-cache-inmemory';

export const antStatsClient = new ApolloClient({
  link: new HttpLink(),
  cache: new InMemoryCache(),
});

export const makeClient = (uri: any) => new ApolloClient({
  link: new HttpLink({ uri }),
  cache: new InMemoryCache(),
});
