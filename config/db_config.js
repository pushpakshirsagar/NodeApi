const Sequelize = require('sequelize');
const { Client } = require('pg');

module.exports= new Sequelize('node_db','postgres','admin@123',{
	host:'localhost',
	dialect:'postgres',
	operatorsAliases:false,
	pool:{
		max:5,
		min:0,
		acquire:30000,
		idle:10000
	},
});

//conect with db
// const connectionString = 'postgres://postgres:admin@123@localhost:5432/laravel_db';
// module.exports = new Client({
//     connectionString: connectionString
// });
//end  with db