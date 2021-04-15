const express = require('express');
const {
  addStudent,
  getStudents,
  getStudentById,
  updateStudent,
  deleteStudent,
} = require('../controllers/studentController');

const router = express.Router();

router.post('/student', addStudent);
router.get('/student', getStudents);
router.get('/student/:studentId', getStudentById);
router.put('/student/:studentId', updateStudent);
router.delete('/student/:studentId', deleteStudent);
module.exports = {
  routes: router,
};
