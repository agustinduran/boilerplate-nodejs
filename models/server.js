const express = require('express');

const TestController          = require('../controllers/test-controller');
const AuthController          = require('../controllers/auth-controller');
const UserController          = require('../controllers/user-controller');

class Server {
    constructor() {
        this.app = express();
        this.PORT = process.env.NODE_PORT;

        this.app.use(express.json());
        // App routes
        this.routes();
    }

    routes() {
        this.app.use('/api/test', TestController);
        this.app.use('/api/auth', AuthController);
        this.app.use('/api/usuarios', UserController);
    }

    listen() {
        this.app.listen(this.PORT, () => {
            console.log('Servidor iniciado');
        });
    }
}

module.exports = Server;