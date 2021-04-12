const express = require('express');
const cors = require('cors');

const config = require('./config');

//var util = require('./util');

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) =>
  res.send({
    error: false,
    message: 'Welcome to RESTful CRUD API with NodeJS, Express,MYSQL',
  }),
);

app.listen(config.port, (err) => {
  // err handling
  console.log(`Node App is running on  port: ${config.port}`);
});
