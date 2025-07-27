const express = require('express');


// router object

const app = express();

const PORT = 3000;


const serverSetup = async () => {
    app.listen(PORT, () => {
        console.log(`server is started on ${PORT}`);
    });
}

serverSetup();