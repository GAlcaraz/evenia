import * as Types from './types';

import { GraphQLClient } from 'graphql-request';
import { GraphQLClientRequestHeaders } from 'graphql-request/build/cjs/types';
import { gql } from 'graphql-request';
export type GetEventsVariables = Types.Exact<{ [key: string]: never; }>;


export type GetEvents = { __typename?: 'Query', events: Array<{ __typename?: 'Event', id: string, name: string, date: any, description?: string | null, city: Types.City }> };


export const GetEventsDocument = /*#__PURE__*/ gql`
    query GetEvents {
  events {
    id
    name
    date
    description
    city
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    GetEvents(variables?: GetEventsVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetEvents> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetEvents>(GetEventsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetEvents', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;