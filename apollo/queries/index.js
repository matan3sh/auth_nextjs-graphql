import { gql } from 'apollo-boost';

export const GET_PORTFOLIO = gql`
  query Portfolio($slug: String) {
    portfolio(slug: $slug) {
      _id
      title
      image
      subtitle
      description
      tech
      images
      slug
    }
  }
`;

export const GET_PORTFOLIOS = gql`
  query Portfolios {
    portfolios {
      _id
      title
      image
      subtitle
      description
      tech
      slug
    }
  }
`;

export const CREATE_PORTFOLIO = gql`
  mutation CreatePortfolio {
    createPortfolio(
      input: {
        title: "Fibber - A Marketplace"
        subtitle: "Web Development"
        image: "https://res.cloudinary.com/dwymjj6rm/image/upload/v1602340233/portfolio/freshbnb1.png"
        description: "New Description"
        tech: ["react", "node", "mongo", "graphql", "express", "next"]
        images: [
          "https://res.cloudinary.com/dwymjj6rm/image/upload/v1602340230/portfolio/freshbnb2.png"
          "https://res.cloudinary.com/dwymjj6rm/image/upload/v1602340233/portfolio/freshbnb1.png"
          "https://res.cloudinary.com/dwymjj6rm/image/upload/v1602340231/portfolio/freshbnb3.png"
        ]
      }
    ) {
      _id
      title
      image
      subtitle
      description
      tech
      slug
    }
  }
`;

export const UPDATE_PORTFOLIO = gql`
  mutation UpdatePortfolio($id: ID) {
    updatePortfolio(
      id: $id
      input: { title: "UPDATE Fibber - A Marketplace" }
    ) {
      _id
      title
      description
    }
  }
`;

export const DELETE_PORTFOLIO = gql`
  mutation DeletePortfolio($id: ID) {
    deletePortfolio(id: $id)
  }
`;

// AUTH QUERIES START -------------------------------

export const SIGN_UP = gql`
  mutation SignUp(
    $avatar: String
    $username: String!
    $email: String!
    $password: String!
    $passwordConfirmation: String!
  ) {
    signUp(
      input: {
        avatar: $avatar
        username: $username
        email: $email
        password: $password
        passwordConfirmation: $passwordConfirmation
      }
    )
  }
`;

export const SIGN_IN = gql`
  mutation SignIn($email: String!, $password: String!) {
    signIn(input: { email: $email, password: $password }) {
      _id
      username
      role
      avatar
    }
  }
`;

export const GET_USER = gql`
  query User {
    user {
      _id
      username
      role
    }
  }
`;

export const SIGN_OUT = gql`
  mutation SignOut {
    signOut
  }
`;

// AUTH QUERIES END -------------------------------
