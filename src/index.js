const express = require('express');
const bodyparser = require('body-parser');

const { PORT } = require('./config/serverConfig')
const apiRoutes = require('./routes/index');

const db = require('./models/index');
const { User, Role } = require('./models/index');


const SetupServer = async () => {

        // create a express object
        const app = express();
        
        app.use(express.json());
        app.use(bodyparser.urlencoded({extended: true}));

        app.use('/api', apiRoutes);

        
        if(process.env.DB_SYNC) {
            db.sequelize.sync({ alter: true }); 
        }


        app.listen(PORT, () => {    
            console.log(`server is Running on PORT n. ${PORT}`);
        });
}


SetupServer();

