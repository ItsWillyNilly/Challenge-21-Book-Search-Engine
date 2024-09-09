const typeDefs = `

type User {
    _id: ID!
    username: String!
    email: String!
    bookCount: Int
    savedBooks: [Book]
}

input BookInput {
    authors:[String!]!
    description:String!
    title: String!
    bookId: String!
    image: String
    Link: String    
}

type Book {
    authors:[String!]!
    description:String!
    title: String!
    bookId: String!
    image: String
    Link: String
}

type Auth {
    token: ID!
    user: User
}

type Query {
    me: User
}

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(input: BookInput!): User
    removeBook(bookId: String!): User
}
`;

module.exports = typeDefs;