const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

// view engine setup
app.set('view engine', 'pug');
app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: true}));
app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
    res.status(404).render('404');
});


// error handler
//app.use(function(err, req, res, next) {
// set locals, only providing error in development
// res.locals.message = err.message;
// res.locals.error = req.app.get('env') === 'development' ? err : {};

// render the error page
//     res.status(err.status || 500);
//     res.render('error');
// });

app.listen(3000, function () {
    console.log("running at 3000 port");
});
module.exports = app;
