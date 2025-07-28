const express = require('express');
const bodyparser = require('body-parser');

const { PORT } = require('./config/serverConfig');
const { JWT_KEY } = require('./config/serverConfig');
const ApiRoutes = require('./routes/inedex')
const db = require('./models/index');


// const  UserRepository  = require('./repository/user-repository');

const UserService = require('./services/user-service');


// router object
const app = express();


const serverSetup = async () => {

    app.use(bodyparser.urlencoded({extended: true}));
    app.use(bodyparser.json());

    app.use('/api', ApiRoutes);


    const service = new UserService();
    // const result =  service.createToken({ email: "rajan@gmail.com", id: "1"});
    // console.log("Token is created ", result);


    // const token =  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJhamFuQGdtYWlsLmNvbSIsImlkIjoiMSIsImlhdCI6MTc1MzYyNTI5OCwiZXhwIjoxNzUzNjYxMjk4fQ.sHG1uYVn8kEOfx8uqB735BTg6vAtsinkAbm8EddTlIs"
    // const verify = service.verifyToken(token, JWT_KEY );
    // console.log(verify);

    app.listen(PORT, async () => {
        console.log(`server is started on ${PORT}`);
    });

    

}

 
serverSetup();