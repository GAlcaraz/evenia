import { getGraphqlClient } from '@evenia/web/data-access-graphql';

export const gql = getGraphqlClient('http://localhost:3000/graphql');
