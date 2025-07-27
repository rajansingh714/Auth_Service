const dotev = require('dotenv');
const bcrypt = require('bcrypt');


dotev.config();

module.exports = {
    PORT: process.env.PORT,
    SALT: bcrypt.genSaltSync(10)
}