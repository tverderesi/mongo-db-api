
# MONGODB GRAPHQL CRUD API

This is a simple CRUD (Create, Read, Update, Delete) API built using Apollo Server and MongoDB. It provides endpoints to manage books, including adding new books, retrieving book details, updating book information, and deleting books.

## Why GraphQL?

I have chosen to use GraphQL as the middleware for this API instead of traditional REST routes. GraphQL offers several benefits that make the development process faster and more efficient:

- **Flexible Data Retrieval**: With GraphQL, clients can specify the exact data they need, reducing over-fetching and under-fetching of data commonly seen in REST APIs. This flexibility allows for faster development and improved performance.

- **Reduced Round-Trips**: GraphQL allows clients to retrieve multiple resources in a single request, reducing the number of round-trips to the server. This improves network efficiency and enhances the overall API performance.

- **Strong Typing and Documentation**: GraphQL comes with a strong type system that enables self-documenting APIs. With clear schemas and types, developers can easily understand and explore the API, leading to better collaboration and reduced development time.

- **Backward Compatibility**: GraphQL APIs are designed to be backward-compatible, enabling the addition of new fields and types without breaking existing clients. This flexibility ensures a smooth evolution of the API over time.

## Prerequisites

Before running this API, ensure that you have the following installed on your machine:

- Node.js (v14 or above)
- MongoDB

## Getting Started

1. Clone the repository:

```
git clone <repository-url>
```


2. Install the dependencies:

```
cd mongo-db-api
npm install
```

3. Setting up databse and collection on MongoDB. Use either mongosh or your mongodb favorite tool.
3.1. switch to the bookstore database:
```
use bookstore
```
3.2. Seed it with example data contained on [seedData.json](./seedData.json)


4. Set up the environment variables:

   - Create a `.env` file in the project root directory.
   - Define the following variables in the `.env` file:
     - `MONGO_URI`: The connection URI for your MongoDB database.
     - 'PORT': the port you want the server to connect.

5. Start the server:

```
npm start
```

6. The API will be available at `http://localhost:4000/graphql`. I don't recomend using REST endpoints but instead use Apollo Server's Playground if you want to mess with it.


## Example Usage

### Get All Books

```graphql
query {
  books {
    id
    title
    pages
    edition
    isbn
    price
    type
  }
}
```

### Get Book by ID

```graphql
query {
  book(id: "bookId") {
    id
    title
    pages
    edition
    isbn
    price
    type
  }
}
```

### Add a New Book

```graphql
mutation {
  addBook(input: {
    title: "New Book"
    pages: 200
    edition: 1
    isbn: "1234567890"
    price: 29.99
    type: HARDCOVER
  }) {
    id
    title
    pages
    edition
    isbn
    price
    type
  }
}
```

### Update Book

```graphql
mutation {
  updateBook(id: "bookId", input: {
    title: "Updated Book Title"
  }) {
    id
    title
    pages
    edition
    isbn
    price
    type
  }
}
```

### Delete Book

```graphql
mutation {
  deleteBook(id: "bookId") {
    id
    title
    pages
   

 edition
    isbn
    price
    type
  }
}
```

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvement, please create a new issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

Feel free to modify the content according to your project's specific details and requirements.
