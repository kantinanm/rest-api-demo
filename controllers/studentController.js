const Student = require('../models/student');
const db = require('../db');

const addStudent = async (req, res, next) => {
  try {
    const studentid = '';
    const firstname = '';
    const lastname = '';
    const registeryear = '';
    const grade = '';
    const statusid = '';
    const magorid = '';
    const degree = '';

    const field = [
      'studentid',
      'firstname',
      'lastname',
      'registeryear',
      'grade',
      'statusid',
      'magorid',
      'degree',
    ];
    /*let result = field
      .map((field) => `(${student_id}, ${firstname}, ${lastname})`)
      .join(',');*/

    const sqlQuery = `INSERT INTO student VALUES ', ${field
      .map(
        (va) =>
          `(${studentid}, ${firstname}, ${lastname}, ${registeryear}, ${grade}, ${statusid}, ${magorid}, ${degree})`,
      )
      .join(',')}!`;
    console.log(`sqlQuery is : ${sqlQuery}`);

    const studentResult = await db.dbCon.execute(
      sqlQuery,
      (err, result, fields) => {
        if (err) throw err;
        res.send('Record saved successfuly');
      },
    );
    res.send('Record saved successfuly');
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.export = {
  addStudent,
};
