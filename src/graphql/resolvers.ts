import Book from "../models/Book";
export const resolvers = {
  Query: {
    books: async () => {
      return await Book.find();
    },
    book: async (_, { id }) => {
      return await Book.findById(id);
    },
    bookByTitle: async (_, { title }) => {
      return await Book.find({ title });
    },
    bookByAuthor: async (_, { pages }) => {
      return await Book.find({ pages });
    },
    bookByEdition: async (_, { edition }) => {
      return await Book.find({ edition });
    },
    bookByISBN: async (_, { isbn }) => {
      return await Book.find({ isbn });
    },
    bookByType: async (_, { type }) => {
      return await Book.find({ type });
    },
  },
  Mutation: {
    addBook: async (_, { input }) => {
      const book = new Book(input);
      await book.save();
      return book;
    },
    updateBook: async (_, { id, input }) => {
      const book = await Book.findById(id);
      book.title = input.title;
      book.pages = input.pages;
      book.edition = input.edition;
      book.isbn = input.isbn;
      book.price = input.price;
      book.type = input.type;
      await book.save();
      return book;
    },
    deleteBook: async (_, { id }) => {
      const book = await Book.findById(id);
      await book.remove();
      return book;
    },
  },
};
