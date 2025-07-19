const fs = require('fs');
require('dotenv').config(); // To read from .env file

const SESSION_ID = process.env.SESSION_ID || '𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=ZYZikQCJ#lUQQwM_EexS5pXRnQtVVT-Gbvro65VetUxjPvJqB_Fg';

module.exports = {
  SESSION_ID,
  BOT_NAME: 'Asitha-MD',
  OWNER_NAME: 'Thilina Akalanka',
  PREFIX: ['.','!'], // command prefixes
  REACT_EMOJI: '💖',
  FOOTER: '© Asitha MD Bot',
};

