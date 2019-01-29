// const db = require('../db/config');
// const patients = {};

// patients.getAll= (req, res, next) => {
//   db.manyOrNone('SELECT * from patient ;') 
//     .then((data) => {
//       console.log(data);
//       res.locals.patient = data;
//       next();
//     })
//     .catch((error) => {
//       console.log(error)
//       next();
//     })
// }
// module.exports = patient;