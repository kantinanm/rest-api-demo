const mysql = require('mysql2/promise');
const winston = require('winston');
const config = require('../config');
//const db = require('../db');

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

const addStudent = async (req, res, next) => {
  try {
    console.log(`sqlQuery `);

    const studentResult = await pool.query(
      'INSERT INTO student SET ?',
      {
        student_id: req.body.student_id,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        gender: req.body.gender,
        province_name: req.body.province_name,
        register_year: req.body.register_year,
        grade: req.body.grade,
        status_id: req.body.status_id,
        magor_id: req.body.magor_id,
        degree: req.body.degree,
      },
      (err) => {
        if (err) throw err;
      },
    );

    if (
      studentResult &&
      Array.isArray(studentResult) &&
      studentResult[0] &&
      studentResult[0].affectedRows > 0
    ) {
      res.send({
        result: [
          {
            affectedRows: studentResult[0].affectedRows,
            id: studentResult[0].insertId,
          },
        ],
        message: 'Record saved successfuly',
      });
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  addStudent,
};
