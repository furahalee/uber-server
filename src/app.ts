import express from "express";
import { createServer } from "@graphql-yoga/node";

const app = express();

const graphQLServer = createServer({});

// Bind GraphQL Yoga to `/graphql` endpoint
app.use("/graphql", graphQLServer);

export default app;
