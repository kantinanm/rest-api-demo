const mysql = require('mysql2');
const winston = require('winston');
const config = require('./config');

module.exports = () => {
  const pool = mysql.createPool({
    host: config.mysql_host,
    user: config.mysql_user,
    password: config.mysql_password,
    database: config.mysql_database,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  });

  pool.on('connection', (connection) => {
    console.log('DB Connection established');
    winston.info('Mysql Db Connected......');

    connection.on('error', (err) => {
      console.error(new Date(), 'MySQL error', err.code);
    });
    connection.on('close', (err) => {
      console.error(new Date(), 'MySQL close', err);
      winston.info('Mysql Db close......');
    });
  });

  /*const dbCon = mysql.createConnection({
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
  });*/
};
