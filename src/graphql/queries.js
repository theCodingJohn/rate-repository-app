import { gql } from "@apollo/client";

export const GET_REPOSITORIES = gql`
  query {
    repositories {
      edges {
        node {
          id
          fullName
          description
          ratingAverage
          stargazersCount
          language
          reviewCount
          ownerAvatarUrl
          forksCount
        }
      }
    }
  }
`;
