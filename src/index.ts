import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import { typeDefs } from "./graphql/typeDefs";
import { resolvers } from "./graphql/resolvers";
import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import http from "http";
import bodyParser from "body-parser";

require("dotenv").config();

const port = process?.env?.PORT as string;
const mongoURI = process?.env?.MONGO_URI as string;

const app = express();
const httpServer = http.createServer(app);

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

(async () => {
  await server.start();
  app.use(
    "/",
    cors<cors.CorsRequest>(),
    bodyParser.json(),
    expressMiddleware(server)
  );
})();

mongoose.set("strictQuery", false);
mongoose
  .connect(mongoURI)
  .then(() => {
    console.log("Connected to Database Successfully.");
  })
  .catch((err) => {
    console.error("Error connecting to Database:", err);
  })
  .then(async () => {
    await new Promise<void>((resolve) =>
      httpServer.listen({ port: 4000 }, resolve)
    );

    console.log(`🚀 Server ready at http://localhost:4000/`);
  });
