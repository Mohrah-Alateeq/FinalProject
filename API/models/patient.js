const db = require('../db/config');
const patients = {};


patients.getAll= (req, res, next) => {
  db.manyOrNone('SELECT * from patient;') 
    .then((data) => {
      console.log(data);
      res.locals.patient = data;
      next();
    })
    .catch((error) => {
      console.log(error)
      next();
    })
}

patients.create = (req, res, next) => {
  db.one('INSERT INTO patient (pname ,age ,gender ,statusOfDisease ,address ,phone ) VALUES($1, $2, $3, $4, $5, $6) RETURNING *;',
    [req.body.pname,req.body.age,req.body.gender,req.body.statusOfDisease,req.body.address,req.body.phone])
    .then((data) => {
      res.locals.patient = data;
      next();
    })
    .catch((error) => {
      console.log(error)
      next();
    })
}

patients.update = (req, res, next) => {
  db.one('UPDATE patient SET pname=$1, age=$2, gender=$3, statusOfDisease=$4, address=$5, phone=$6 WHERE id=$7 RETURNING *;',
  [req.body.pname,req.body.age,req.body.gender,req.body.statusOfDisease,req.body.address,req.body.phone])
    .then((data) => {
      res.locals.patient = data;
      next();
    })
    .catch((error) => {
      console.log(error)
      next();
    })
}

patients.delete = (req, res, next) => {
  db.none('DELETE FROM patient WHERE id=$1', [req.params.id])
    .then((data) => {
      next();
    })
    .catch((error) => {
      console.log(error)
      next();
    })
}

module.exports = patient;