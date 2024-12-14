import express from 'express';
import { ApolloServer } from '@apollo/server';
import {expressMiddleware} from '@apollo/server/express4';
import bodyParser from 'body-parser';
import { PrismaClient } from '@prisma/client';

export async function initServer(){
    const app = express();
    app.use(bodyParser.json());

    // PrismaClient.User.create({

    // })

    const graphqlServer = new ApolloServer({
        typeDefs:
        `type Query {
        sayHello: String
        sayHelloToMe(name: String!): String}
        `,
        resolvers: {
            Query: {
                sayHello: () => "Hello World from Apollo Graphql Server",
            },
        },
    });

    await graphqlServer.start();

    app.use("/graphql", expressMiddleware(graphqlServer));

    return app;
}

