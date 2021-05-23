const dotenv = require('dotenv');
//const path = require('path');
const assert = require('assert');

dotenv.config({ path: './.env' });
const {
  PORT,
  HOST,
  HOST_URL,
  MYSQL_HOST,
  MYSQL_USER,
  MYSQL_PASSWORD,
  MYSQL_DATABASE,
} = process.env;

assert(PORT, 'Port is required');
assert(HOST, 'HOST is required');
module.exports = {
  port: PORT,
  host: HOST,
  host_url: HOST_URL,
  mysql_host: MYSQL_HOST,
  mysql_user: MYSQL_USER,
  mysql_password: MYSQL_PASSWORD,
  mysql_database: MYSQL_DATABASE,
};
