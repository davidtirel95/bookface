const { ApolloServer, PubSub } = require('apollo-server');
//const { ApolloServerPluginDrainHttpServer } = require ('apollo-server-core');
//

/*const express  = require('express');
const app = express(); 
const cors = require('cors'); 
app.use( 
  cors ({
    origin:'*',
  })
);*/
//const { createServer, http } = require ('http'); 
//import { createServer } from 'http';
//const { execute, subscribe } = require('graphql');
//import { execute, subscribe } from 'graphql';
//const { SubscriptionServer } = require('subscriptions-transport-ws');
//import { SubscriptionServer } from 'subscriptions-transport-ws';
//const { makeExecutableSchema } = require('@graphql-tools/schema'); 
//import { makeExecutableSchema } from '@graphql-tools/schema';

//async function startApolloServer(typeDefs, resolvers) {
  // Required logic for integrating with Express
  //const app = express();
  //const httpServer = http.createServer(app);

  // Same ApolloServer initialization as before, plus the drain plugin.
  /*const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });*/

  // More required logic for integrating with Express
  //await server.start();
  //server.applyMiddleware({
    //app,

    // By default, apollo-server hosts its GraphQL endpoint at the
    // server root. However, *other* Apollo Server packages host it at
    // /graphql. Optionally provide this to match apollo-server.
    //path: '/'
 // });

  // Modified server startup
  //await new Promise<Void>(resolve => httpServer.listen({ port: 3000 }, resolve));
  //console.log(`🚀 Server ready at http://localhost:3000${server.graphqlPath}`);
//}
// This `app` is the returned value from `express()`.
//const httpServer = createServer(Subscription);

//const { PubSub } = require('apollo-server-express'); 
const mongoose = require('mongoose');

const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers'); 
const { MONGODB } = require('./config.js');

//const pubsub = new PubSub(); 

//const schema = makeExecutableSchema({ typeDefs, resolvers });
// ...
/*const server = new ApolloServer({
  schema,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  context: ({ req }) => ({ req, pubsub })
});*/


const server = new ApolloServer({
    typeDefs, 
    resolvers,
    //plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    context: ({ req }) => ({ req, /*pubsub*/ })
}); 

//DB connection/Server connection
mongoose
    .connect(MONGODB, { useNewUrlParser: true})
    .then (() => {
        console.log('mongodb connected'); 
        return server.listen({ port: 5000});
    })
    .then((res) => {
        console.log(`Server running at ${res.url}`);
    });




  