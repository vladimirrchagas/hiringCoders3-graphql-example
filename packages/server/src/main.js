import express from 'express';
import 'dotenv/config'
// import cors from 'cors';
import { ApolloServer } from 'apollo-server-express';
import typeDefs from './graphql/typeDefs';
import resolvers from './graphql/resolvers';

// ######## Using AppoloServer

async function startApolloServer() {
    const app = express();

    const server = new ApolloServer({
        typeDefs,
        resolvers
    });
    
    await server.start();
    
    server.applyMiddleware({
        app,
        cors: {
            origin: ['http://localhost:3000', 'https://studio.apollographql.com']
        },
        bodyParserConfig: true,
    });

    const PORT = process.env.PORT ? parseInt(process.env.PORT) : 8000;

    const HOSTNAME = process.env.HOST_NAME || '127.0.0.1';

    console.log(process.env.HOST_NAME)
    console.log(process.env.PORT)

    app.listen(PORT, HOSTNAME, () => {
        console.log(`Server listening at http://${HOSTNAME}:${PORT}`)
    })
}

startApolloServer();

// ######## Using Express

// app.get('/status', (_, res) => {
//     res.send({
//         status: 'Okay',
//     });
// });

// const enableCors = cors({
//     origin: 'http://localhost:3000'
// });

// app
//     .options('/authenticate', enableCors)
//     .post('/authenticate', enableCors, express.json(), (req, res) => {
//         console.log(
//             'E-mail', req.body.email,
//             'Senha', req.body.password
//         );
//         res.send({
//             Okay: 'Okay',
//         });
//     });
// ########