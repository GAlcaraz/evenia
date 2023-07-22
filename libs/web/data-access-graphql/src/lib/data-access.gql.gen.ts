import * as Types from './types';

import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import { gql } from 'graphql-request';
export type GetEventsVariables = Types.Exact<{ [key: string]: never; }>;


export type GetEvents = { __typename?: 'Query', events: Array<{ __typename?: 'Event', id: string, name: string, date: any, description?: string | null, city: Types.City }> };

export type UpdateEventVariables = Types.Exact<{
  id: Types.Scalars['String']['input'];
  name?: Types.InputMaybe<Types.Scalars['String']['input']>;
  date?: Types.InputMaybe<Types.Scalars['DateTime']['input']>;
  description?: Types.InputMaybe<Types.Scalars['String']['input']>;
  city?: Types.InputMaybe<Types.City>;
}>;


export type UpdateEvent = { __typename?: 'Mutation', updateEvent: { __typename?: 'Event', name: string, id: string, date: any, description?: string | null, city: Types.City } };

export type CreateEventVariables = Types.Exact<{
  name?: Types.InputMaybe<Types.Scalars['String']['input']>;
  date?: Types.InputMaybe<Types.Scalars['DateTime']['input']>;
  description?: Types.InputMaybe<Types.Scalars['String']['input']>;
  city?: Types.InputMaybe<Types.Scalars['String']['input']>;
}>;


export type CreateEvent = { __typename?: 'Mutation', createEvent: { __typename?: 'Event', name: string, id: string, date: any, description?: string | null, city: Types.City } };

export type ValidateUserVariables = Types.Exact<{
  email: Types.Scalars['String']['input'];
  password: Types.Scalars['String']['input'];
}>;


export type ValidateUser = { __typename?: 'Query', validateUser: boolean };


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
    mutation UpdateEvent($id: String!, $name: String, $date: DateTime, $description: String, $city: City) {
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
export const ValidateUserDocument = /*#__PURE__*/ gql`
    query ValidateUser($email: String!, $password: String!) {
  validateUser(email: $email, password: $password)
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    GetEvents(variables?: GetEventsVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetEvents> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetEvents>(GetEventsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetEvents', 'query');
    },
    UpdateEvent(variables: UpdateEventVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateEvent> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateEvent>(UpdateEventDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'UpdateEvent', 'mutation');
    },
    CreateEvent(variables?: CreateEventVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateEvent> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateEvent>(CreateEventDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CreateEvent', 'mutation');
    },
    ValidateUser(variables: ValidateUserVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ValidateUser> {
      return withWrapper((wrappedRequestHeaders) => client.request<ValidateUser>(ValidateUserDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'ValidateUser', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;