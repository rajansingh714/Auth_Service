const express = require('express');
const bodyparser = require('body-parser');

const { PORT } = require('./config/serverConfig')
const apiRoutes = require('./routes/index');

// const UserRepository = require('./repository/user-repository');
const UserSerive = require('./services/user-service');

const SetupServer = async () => {

        // create a express object
        const app = express();
        
        app.use(express.json());
        app.use(bodyparser.urlencoded({extended: true}));


        app.use('/api', apiRoutes);

        // const repo = new UserRepository();
        // const result = await repo.getById(1);
        // console.log(result)

        const service  = new UserSerive();
        // const newToken = service.createToken({ email: 'rajan@admin.com', id: 1 });
        // console.log(newToken);

        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJhamFuQGFkbWluLmNvbSIsImlkIjoxLCJpYXQiOjE3NTE5MTQ5NDcsImV4cCI6MTc1MTkyMjE0N30.Xhv4ZzMVz0qZ4QzBPzpTdV8OUGTMTd3SqdUrmQFqWf4"
        const user = service.verfifyToke(token);
        console.log(user)

        const verifyToken = 
        app.listen(PORT, () => { 
            console.log(`server is Running on PORT n. ${PORT}`);
        });

}


SetupServer();

