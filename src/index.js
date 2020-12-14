const colors = require('colors');
const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();

//SETTINGS
app.set('port', 3000);


//MIDLEWARE
function logger(req, res, next){
    console.log(`ROUTE RECIVER: ${req.protocol}://${req.get('host')}${req.originalUrl}`);
    next();
}


app.use(morgan('dev'));

//Routes
app.use('/api', require('./routes/index'));

//Static Files
app.use(express.static(path.join(__dirname, 'public')));

//Server Start
app.listen(app.get('port'), () => {
    console.log("Server runing on port".yellow, app.get('port').toString().yellow);
});

