import * as Types from './types';

import { GraphQLClient } from 'graphql-request';
import { GraphQLClientRequestHeaders } from 'graphql-request/build/cjs/types';
import { gql } from 'graphql-request';
export type GetEventsVariables = Types.Exact<{ [key: string]: never; }>;


export type GetEvents = { __typename?: 'Query', events: Array<{ __typename?: 'Event', id: string, name: string, date: any, description?: string | null, city: Types.City }> };

export type UpdateEventVariables = Types.Exact<{
  id: Types.Scalars['ID']['input'];
  name?: Types.InputMaybe<Types.Scalars['String']['input']>;
  date?: Types.InputMaybe<Types.Scalars['DateTime']['input']>;
  description?: Types.InputMaybe<Types.Scalars['String']['input']>;
  city?: Types.InputMaybe<Types.Scalars['String']['input']>;
}>;


export type UpdateEvent = { __typename?: 'Mutation', updateEvent: { __typename?: 'Event', name: string, id: string, date: any, description?: string | null, city: Types.City } };

export type CreateEventVariables = Types.Exact<{
  name?: Types.InputMaybe<Types.Scalars['String']['input']>;
  date?: Types.InputMaybe<Types.Scalars['DateTime']['input']>;
  description?: Types.InputMaybe<Types.Scalars['String']['input']>;
  city?: Types.InputMaybe<Types.Scalars['String']['input']>;
}>;


export type CreateEvent = { __typename?: 'Mutation', createEvent: { __typename?: 'Event', name: string, id: string, date: any, description?: string | null, city: Types.City } };

export type LoginVariables = Types.Exact<{
  email: Types.Scalars['String']['input'];
  password: Types.Scalars['String']['input'];
}>;


export type Login = { __typename?: 'Query', login: { __typename?: 'AccessToken', accessToken?: string | null } };


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
export const UpdateEventDocument = /*#__PURE__*/ gql`
    mutation UpdateEvent($id: ID!, $name: String, $date: DateTime, $description: String, $city: String) {
  updateEvent(
    where: {id: $id}
    data: {name: $name, date: $date, description: $description, city: $city}
  ) {
    name
    id
    date
    description
    city
  }
}
    `;
export const CreateEventDocument = /*#__PURE__*/ gql`
    mutation CreateEvent($name: String, $date: DateTime, $description: String, $city: String) {
  createEvent(
    data: {name: $name, date: $date, description: $description, city: $city}
  ) {
    name
    id
    date
    description
    city
  }
}
    `;
export const LoginDocument = /*#__PURE__*/ gql`
    query Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    accessToken
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    GetEvents(variables?: GetEventsVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetEvents> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetEvents>(GetEventsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetEvents', 'query');
    },
    UpdateEvent(variables: UpdateEventVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<UpdateEvent> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateEvent>(UpdateEventDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'UpdateEvent', 'mutation');
    },
    CreateEvent(variables?: CreateEventVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<CreateEvent> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateEvent>(CreateEventDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CreateEvent', 'mutation');
    },
    Login(variables: LoginVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Login> {
      return withWrapper((wrappedRequestHeaders) => client.request<Login>(LoginDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Login', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;