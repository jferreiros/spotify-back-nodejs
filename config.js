const mysql = require('mysql');

const pool = mysql.createConnection({
  connectionLimit: 5,
  host: 'bafhkyezr13mtepp5fkm-mysql.services.clever-cloud.com',
  user: 'uhwtovctqitxzrjj',
  password: 'MTZ978OJooNNuM7yTE8V',
  database: 'bafhkyezr13mtepp5fkm',
  insecureAuth: true,
  multipleStatements: true,
});

// const pool = mysql.createPool({
//     host: 'bafhkyezr13mtepp5fkm-mysql.services.clever-cloud.com',
//     user: 'uhwtovctqitxzrjj',
//     password: 'MTZ978OJooNNuM7yTE8V',
//     database: 'bafhkyezr13mtepp5fkm',
//     insecureAuth: true,
//     multipleStatements: true,
//   });

// var onConnect = (res, callback) => {
//   function onGetConnection(err, conn) {
//     if (err) {
//       res.json(err);
//     } else {
//       callback(conn);
//     }
//   }
//   try {
//     pool.getConnection(onGetConnection);
//   } catch (ex) {
//     res.json(ex);
//   }
// };

  
module.exports = pool;