const express= require('express');

const bodyParser= require('body-parser');
const {PORT}= require('./config/serverConfig');
const apiRoutes= require('./routes/index');
//const UserRepository = require('./repository/user-repository');
const UserService= require('./services/user-service');
const app= express();

const prepareAndStartServer= ()=>{

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));


    app.use('/api', apiRoutes);


    app.listen(PORT,async()=>{
        console.log(`Server starter on PORT: ${PORT}`);
        const service = new UserService();
        const newToken= service.createToken({email:'rajan@admin.com',id:1});
        console.log("new token is ", newToken);
        //const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJhamFuQGFkbWluLmNvbSIsImlkIjoxLCJpYXQiOjE2OTE0MDYxOTcsImV4cCI6MTY5MTQwOTc5N30.I_Dz0BddYT3zeAucsqsFRW4XnrjtccvtxphIbg8QakE';
        //const response= service.verifyToken(token);
        //console.log(response);
        //const repo= new UserRepository();
        //const response = await repo.getById(1);
       // console.log(response);

    });
}

prepareAndStartServer();
