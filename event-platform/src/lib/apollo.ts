import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4nzpj4106yb01z3fub298g0/master',
  cache: new InMemoryCache()
});