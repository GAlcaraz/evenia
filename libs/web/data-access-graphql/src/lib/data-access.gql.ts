import { gql } from 'graphql-request';

const GET_EVENTS = gql`
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

const UPDATE_EVENT = gql`
  mutation UpdateEvent(
    $id: ID!
    $name: String
    $date: DateTime
    $description: String
    $city: String
  ) {
    updateEvent(
      where: { id: $id }
      data: { name: $name, date: $date, description: $description, city: $city }
    ) {
      name
      id
      date
      description
      city
    }
  }
`;

const CREATE_EVENT = gql`
  mutation CreateEvent(
    $name: String
    $date: DateTime
    $description: String
    $city: String
  ) {
    createEvent(
      data: { name: $name, date: $date, description: $description, city: $city }
    ) {
      name
      id
      date
      description
      city
    }
  }
`;

const LOGIN = gql`
  query Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      accessToken
    }
  }
`;
