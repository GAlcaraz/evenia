import { GraphQLClient } from 'graphql-request';
import { getSdk } from './data-access.gql.gen';
import { MaybeFunction } from 'graphql-request/src/types';

export const getGraphqlClient = (
  url: string,
  headers?: MaybeFunction<HeadersInit | undefined>
) => {
  const client = new GraphQLClient(url, {
    headers,
  });

  return getSdk(client);
};
