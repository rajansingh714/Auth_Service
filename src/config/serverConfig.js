const dotev = require('dotenv');
const bcrypt = require('bcrypt');


dotev.config();

module.exports = {
    PORT: process.env.PORT,
    SALT: bcrypt.genSaltSync(10),
    JWT_KEY: process.env.JWT_KEY,
    DB_SYNC: process.env.DB_SYNC
}