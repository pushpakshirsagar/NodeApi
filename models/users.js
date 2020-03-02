// const { Client } = require('pg');
// const connectionString = 'postgres://postgres:admin@123@localhost:5432/laravel_db';
// const client = new Client({
//     connectionString: connectionString
// });
// client.connect();

// console.log()
// const getUsers = (request, response) => {
//   client.query('SELECT * FROM users' ,function (err, result) {
//         if (err) {
//             console.log(err);
//             res.status(400).send(err);
//         }
//         res.status(200).send(result.rows);
//     });
// }

// module.exports = {
//   getUsers
// }

const dbConfig = require("../config/db_config");
const Sequelize = require("sequelize");
const bcrypt = require('bcryptjs');

const User = dbConfig.define('users',{
	first_name: {
      type: Sequelize.STRING
    },
    last_name: {
      type: Sequelize.STRING
    },
    email:{
      type: Sequelize.STRING
    },
   
    remember_token:{
      type: Sequelize.STRING
    },
    createdAt:{
      type: Sequelize.DATE
    },
    updatedAt:{
      type: Sequelize.DATE
    }
});
module.exports = User;
// module.exports = (sequelize, Sequelize) => {
//   const User = sequelize.define("users", {
//     name: {
//       type: Sequelize.STRING
//     },
//     email:{
//       type: Sequelize.STRING
//     },
//     email_verified_at:{
//       type:Sequelize.DATE
//     },
//     password:{
//       type: Sequelize.STRING
//     },
//     remember_token:{
//       type: Sequelize.STRING
//     },
//     created_at:{
//       type: Sequelize.DATE
//     },
//     updated_at:{
//       type: Sequelize.DATE
//     }
//   });

//   return User;
// };
