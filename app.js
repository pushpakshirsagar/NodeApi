var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");
var indexRouter = require('./routes/routes');
var userRes = require('./controllers/userController')
var testAPIRouter = require('./routes/testAPI');
var app = express();
//database connection 
const db = require('./config/db_config');
//check db connected or not
//authenticate for using sequelize library
db.authenticate()
.then(() => console.log("db connected..."))
.catch(err => console.log('Error: ' + err))
//connect fun for pg library
// db.connect()
//   .then(() => console.log('connected...'))
//   .catch(err => console.log('connection error', err))

// view engine setup
app.use(cors());
app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);



// app.get("/testAPI", userRes);
// app.get('/testAPI', function (req, res, next) {
//     client.query('SELECT * FROM users', function (err, result) {
//         if (err) {
//             console.log(err);
//             res.status(400).send(err);
//         }
//         res.status(200).send(result.rows);
//     });
// });
// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

module.exports = app;
