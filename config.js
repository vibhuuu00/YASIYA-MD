const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~kF5lWaoL#liJ6R8pGw0F4RUEaNrCTvfG5AGCqea45zxq56OrmsO4'
};
