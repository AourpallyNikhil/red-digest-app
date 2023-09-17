// mutations.js

import { gql } from 'graphql-tag';

// Define your GraphQL mutation for creating a user
export const createUser = gql`
  mutation CreateUser($input: CreateRedDigestModelInput!) {
    createRedDigestModel(input: $input) {
      id
      emailAddress
      createdAt
      updatedAt
    }
  }
`;

// Define your GraphQL query for getting a user by emailHash
export const getUser = gql`
  query GetUser($emailHash: ID!) {
    getRedDigestModel(id: $emailHash) {
      id
      emailAddress
      createdAt
      updatedAt
    }
  }
`;
