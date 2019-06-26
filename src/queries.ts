import gql from "graphql-tag";

export const GET_ANTS = gql`
  {
    ants {
      name
      color
      weight
      length
    }
  }
`
