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
    $id: String!
    $name: String
    $date: DateTime
    $description: String
    $city: City
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

const VALIDATE_USER = gql`
  query ValidateUser($email: String!, $password: String!) {
    validateUser(email: $email, password: $password)
  }
`;
