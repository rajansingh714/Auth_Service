const express = require('express');
const bodyparser = require('body-parser');

const { PORT } = require('./config/serverConfig');
const ApiRoutes = require('./routes/inedex')

const  UserRepository  = require('./repository/user-repository');


// router object
const app = express();



const serverSetup = async () => {

    app.use(bodyparser.urlencoded({extended: true}));
    app.use(bodyparser.json());

    app.use('/api', ApiRoutes);


    // const repo = new UserRepository();
    // const result = await repo.getById(1);
    // console.log(result);


    app.listen(PORT, () => {
        console.log(`server is started on ${PORT}`);
    });
}

serverSetup();