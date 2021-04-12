const mysql = require('mysql');
const winston = require('winston');
const config = require('./config');

module.exports = () => {
  const dbCon = mysql.createConnection({
    host: config.MYSQL_HOST,
    user: config.MYSQL_USER,
    password: config.MYSQL_PASSWORD,
    database: config.MYSQL_DATABASE,
  });
  dbCon.connect((error) => {
    if (error) {
      console.log(error);
      winston.error("Mysql Db Don't Connect.....", error.message);
    } else {
      console.log('MySQL Connected!');
      winston.info('Mysql Db Connected......');
    }
  });
};
