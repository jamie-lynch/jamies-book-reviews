import { ApolloServer, gql, ApolloError } from "apollo-server";
import { GraphQLScalarType } from "graphql";
import { books, reviews } from "./data";
import { ratingsValue } from "./utils";
import { Kind } from "graphql/language";
import dotenv from "dotenv";

dotenv.config();

const typeDefs = gql`
  scalar Rating
  scalar Date

  type Book {
    id: Int
    title: String
    author: String
    description: String
  }

  type Review {
    id: Int
    book: Book
    date: Date
    rating: Rating
    review: String
  }

  type Query {
    books: [Book]
    reviews: [Review]
    review(id: Int): Review
  }
`;

const resolvers = {
  Query: {
    books: () => books,
    reviews: () => {
      let b: { [key: number]: any } = {};
      books.forEach((book) => {
        b[book.id] = { ...book };
      });
      return reviews.slice().map((review) => {
        return {
          ...review,
          book: b[review.book],
        };
      });
    },
    review: (_: any, args: any) => {
      let b: { [key: number]: any } = {};
      books.forEach((book) => {
        b[book.id] = { ...book };
      });
      let review = reviews.filter((r) => r.id === args.id);
      if (review.length === 0) {
        return new ApolloError("Review not found", "404");
      } else {
        return { ...review[0], book: b[review[0].book] };
      }
    },
  },
  Rating: new GraphQLScalarType({
    name: "Rating",
    description: "Rating custom scalar type",
    parseValue: ratingsValue,
    serialize: ratingsValue,
    parseLiteral(ast) {
      if (ast.kind === Kind.INT) {
        return ratingsValue(parseInt(ast.value, 10));
      }
      return null;
    },
  }),
  Date: new GraphQLScalarType({
    name: "Date",
    description: "Date custom scalar type",
    parseValue(value) {
      return new Date(value);
    },
    serialize(value) {
      return value;
    },
    parseLiteral(ast) {
      if (ast.kind === Kind.INT) {
        return parseInt(ast.value, 10); // ast value is always in string format
      }
      return null;
    },
  }),
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
