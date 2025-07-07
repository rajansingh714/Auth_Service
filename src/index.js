const express = require('express');
const bodyparser = require('body-parser');

const { PORT } = require('./config/serverConfig')
const apiRoutes = require('./routes/index');

// const UserRepository = require('./repository/user-repository');


const SetupServer = async () => {

        // create a express object
        const app = express();
        
        app.use(express.json());
        app.use(bodyparser.urlencoded({extended: true}));


        app.use('/api', apiRoutes);

        // const repo = new UserRepository();
        // const result = await repo.getById(1);
        // console.log(result)


        app.listen(PORT, () => { 
            console.log(`server is Running on PORT n. ${PORT}`);
        });

}


SetupServer();

