const express = require('express');
const app = express();
const routes = require('./routes');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');



app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/static', express.static('public'));
app.use(routes);



app.listen(process.env.Port || 3000, () => {
    console.log('Let me pull the cord on this lawnmow- err- I mean Pig Latin Translator real quick!');
});

module.exports = app;