const typeDefs = `#graphql
type Book {
    _id: ID
    authors: [String]
    description: String!
    bookId: String!
    image: String!
    link: String
    title: String!
}

type User {
    _id: ID
    username: String!
    email: String!
    password: String!
    savedBooks: [bookSchema]
}

type Auth {
    token: ID!
    user: User
}

type Query {
    user(userId: ID!): [User]
    book: [Book]
}

type Mutation {
    createUser(_id: ID!): User
    saveBook(userId: ID!, book: String!): User
    deleteBook(userId: ID!, book: String!): User
}
`