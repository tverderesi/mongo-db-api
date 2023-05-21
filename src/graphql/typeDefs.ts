import { gql } from "graphql-tag";

export const typeDefs = gql`
  enum BookTypeEnum {
    hardcover
    paperback
    ebook
    audiobook
    other
  }

  type Book {
    id: ID
    title: String
    pages: Int
    edition: Int
    isbn: String
    price: Float
    type: BookTypeEnum
  }

  input BookInput {
    title: String
    pages: Int
    edition: Int
    isbn: String
    price: Float
    type: BookTypeEnum
  }

  type Query {
    books: [Book]
    book(id: ID!): Book
    bookByTitle(title: String!): [Book]
    bookByAuthor(pages: Int!): [Book]
    bookByEdition(edition: Int!): [Book]
    bookByISBN(isbn: String!): [Book]
    bookByType(type: BookTypeEnum!): [Book]
  }

  type Mutation {
    addBook(input: BookInput!): Book
    updateBook(id: ID!, input: BookInput!): Book
    deleteBook(id: ID!): Book
  }
`;
