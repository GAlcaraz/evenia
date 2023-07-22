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
