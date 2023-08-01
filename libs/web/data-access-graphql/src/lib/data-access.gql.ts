import { gql } from 'graphql-request';

const GET_EVENTS = gql`
  query GetEvents {
    events {
      id
      name
      date
      description
      city
      owner {
        email
      }
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

const GET_EVENT = gql`
  query GetEvent($id: String!) {
    event(where: { id: $id }) {
      name
      id
      date
      description
      city
      isOwner
    }
  }
`;

const CREATE_EVENT = gql`
  mutation CreateEvent(
    $ownerEmail: String
    $name: String!
    $date: DateTime!
    $description: String
    $city: City!
  ) {
    createEvent(
      data: {
        owner: { connect: { email: $ownerEmail } }
        name: $name
        date: $date
        description: $description
        city: $city
      }
    ) {
      name
      id
      date
      description
      city
    }
  }
`;

const DELETE_EVENT = gql`
  mutation DeleteEvent($id: String!) {
    removeEvent(where: { id: $id }) {
      id
    }
  }
`;

const VALIDATE_USER = gql`
  query ValidateUser($email: String!, $password: String!) {
    validateUser(email: $email, password: $password)
  }
`;
