const colors = require('colors');
const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();

//SETTINGS
app.set('port', 3000);


//MIDLEWARE
app.use(express.json());


app.use(morgan('dev'));

//Routes
app.use('/api/mail', require('./routes/index'));

//Static Files
app.use(express.static(path.join(__dirname, 'public')));

//Server Start
app.listen(app.get('port'), () => {
    console.log("Server runing on port".yellow, app.get('port').toString().yellow);
});

