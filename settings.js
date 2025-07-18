const fs = require('fs');
require('dotenv').config(); // To read from .env file

const SESSION_ID = process.env.SESSION_ID || '𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=pdpnVCJZ#n-5gi-SQuaq86cL0jlOgX7Vrej_ctnw-_H_YvXGkE1g';

module.exports = {
  SESSION_ID,
  BOT_NAME: 'Asitha-MD',
  OWNER_NAME: 'Thilina Akalanka',
  PREFIX: ['.','!'], // command prefixes
  REACT_EMOJI: '💖',
  FOOTER: '© Asitha MD Bot',
};

