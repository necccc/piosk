'use strict';

require('dotenv').config()
const Hapi=require('hapi');

const server = Hapi.server({
    host: process.env.HOST || '0.0.0.0',
    port: process.env.PORT || 8000,
    routes: {
        cors: true
    }
});

const middlewares = [
    require('./src/http/middlewares/no-cookies'),
    require('./src/http/middlewares/authentication')
]
const resources = require('./src/http/resources')

async function start() {
    try {
        await server.register(middlewares.concat(resources))
        await server.start();
    } catch (err) {
        console.log(err);
        process.exit(1);
    }

    console.log('Server running at:', server.info.uri);
};

start();