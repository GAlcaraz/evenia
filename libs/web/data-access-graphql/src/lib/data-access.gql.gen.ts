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

export type GetEventVariables = Types.Exact<{
  id: Types.Scalars['String']['input'];
}>;


export type GetEvent = { __typename?: 'Query', event: { __typename?: 'Event', name: string, id: string, date: any, description?: string | null, city: Types.City, isOwner?: boolean | null } };

export type CreateEventVariables = Types.Exact<{
  ownerEmail?: Types.InputMaybe<Types.Scalars['String']['input']>;
  name: Types.Scalars['String']['input'];
  date: Types.Scalars['DateTime']['input'];
  description?: Types.InputMaybe<Types.Scalars['String']['input']>;
  city: Types.City;
}>;


export type CreateEvent = { __typename?: 'Mutation', createEvent: { __typename?: 'Event', name: string, id: string, date: any, description?: string | null, city: Types.City } };

export type DeleteEventVariables = Types.Exact<{
  id: Types.Scalars['String']['input'];
}>;


export type DeleteEvent = { __typename?: 'Mutation', removeEvent: { __typename?: 'Event', id: string } };

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
export const GetEventDocument = /*#__PURE__*/ gql`
    query GetEvent($id: String!) {
  event(where: {id: $id}) {
    name
    id
    date
    description
    city
    isOwner
  }
}
    `;
export const CreateEventDocument = /*#__PURE__*/ gql`
    mutation CreateEvent($ownerEmail: String, $name: String!, $date: DateTime!, $description: String, $city: City!) {
  createEvent(
    data: {owner: {connect: {email: $ownerEmail}}, name: $name, date: $date, description: $description, city: $city}
  ) {
    name
    id
    date
    description
    city
  }
}
    `;
export const DeleteEventDocument = /*#__PURE__*/ gql`
    mutation DeleteEvent($id: String!) {
  removeEvent(where: {id: $id}) {
    id
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
    GetEvent(variables: GetEventVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetEvent> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetEvent>(GetEventDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetEvent', 'query');
    },
    CreateEvent(variables: CreateEventVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateEvent> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateEvent>(CreateEventDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CreateEvent', 'mutation');
    },
    DeleteEvent(variables: DeleteEventVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<DeleteEvent> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeleteEvent>(DeleteEventDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'DeleteEvent', 'mutation');
    },
    ValidateUser(variables: ValidateUserVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ValidateUser> {
      return withWrapper((wrappedRequestHeaders) => client.request<ValidateUser>(ValidateUserDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'ValidateUser', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;