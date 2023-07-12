const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  local: {
    localUrlDatabse: process.env.DATABASE_URL,
    secret: 'password',
  },
};
