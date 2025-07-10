const express = require('express');
const bodyparser = require('body-parser');

const { PORT } = require('./config/serverConfig')
const apiRoutes = require('./routes/index');

const UserSerive = require('./services/user-service');
const db = require('./models/index');


const SetupServer = async () => {

        // create a express object
        const app = express();
        
        app.use(express.json());
        app.use(bodyparser.urlencoded({extended: true}));


        app.use('/api', apiRoutes);

        // const user = new UserSerive();
        
        // const result = await user.createToken({email: "hp@gamil.com", id: 10 });
        // console.log("new token is ", result);
        
        // const verify = await user.verifyToken(result);
        
        if(process.env.DB_SYNC) {
            db.sequelize.sync({alert: true});
        }

        app.listen(PORT, () => {    
            console.log(`server is Running on PORT n. ${PORT}`);
        });

}


SetupServer();

