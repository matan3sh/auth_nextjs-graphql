const portfolioFields = `
    slug: String
    title: String
    subtitle: String
    image: String
    description: String
    tech: [String]
    images: [String]
`;

exports.portfolioTypes = `
  type Portfolio{
    _id: ID!
    ${portfolioFields}
  }

  input PortfolioInput{
    ${portfolioFields}
  }
`;

exports.userTypes = `
  type User {
    _id: ID
    avatar: String
    username: String
    name: String
    role: String
  }

  input SignUpInput{
    avatar: String
    username: String!
    name: String
    email: String!
    password: String!
    passwordConfirmation: String!
  }

  input SignInInput{
    email: String!
    password: String!
  }
`;
