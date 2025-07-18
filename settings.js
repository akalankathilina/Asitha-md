const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID === undefined ? '𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=pdpnVCJZ#n-5gi-SQuaq86cL0jlOgX7Vrej_ctnw-_H_YvXGkE1g' : process.env.SESSION_ID,
    PORT: process.env.PORT === undefined ? "8000" : process.env.PORT,
    SESSION_NAME: process.env.SESSION_NAME === undefined ? "𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳" : process.env.SESSION_NAME,
    POSTGRESQL_URL: process.env.POSTGRESQL_URL
};

