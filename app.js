const express = require('express');
const mysql = require('mysql');
const config = require('./config');
//var util = require('./util');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) =>
  res.send({
    error: false,
    message: 'Welcome to RESTful CRUD API with NodeJS, Express,MYSQL',
  }),
);

app.listen(3000, (err) => {
  // err handling
  console.log('Node App is running on  port: 3000 ');
});
