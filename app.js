const express = require('express');
const cors = require('cors');
const winston = require('winston');
//require('dotenv').config();
const config = require('./config');
const studentRoutes = require('./routes/student_route');

//var util = require('./util');

const app = express();
require('./logging')();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) =>
  res.send({
    error: false,
    message: 'Welcome to RESTful CRUD API with NodeJS, Express,MYSQL',
  }),
);

app.use('/api', studentRoutes.routes);

app.listen(config.port, (err) => {
  if (err) {
    console.log(err);
    winston.info(err.message, err);
  } else {
    winston.info(`Node App is running on  port: ${config.port}`);
    console.log(`Node App is running on  port: ${config.port}`);
  }
});
