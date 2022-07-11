import { gql } from "@apollo/client";

export const GET_ALL_TRANSACTIONS = gql`
  {
    allTransactions {
      id
      name
      type
      reference
      status
      date
      imageUrl
      isVerified
    }
  }
`;

export const STATUS_FILTER_QUERY = gql`
  query GetAllTransactions($query: String!) {
    allTransactions(filter: { status: $query }) {
      id
      name
      type
      reference
      status
      date
      imageUrl
      isVerified
    }
  }
`;

export const TYPE_FILTER_QUERY = gql`
  query GetAllTransactions($query: String!) {
    allTransactions(filter: { type: $query }) {
      id
      name
      type
      reference
      status
      date
      imageUrl
      isVerified
    }
  }
`;

export const GLOBAL_SEARCH_QUERY = gql`
  query SearchByQuery($query: String) {
    allTransactions(filter: { q: $query }) {
      id
      name
      type
      status
      date
    }
  }
`;
