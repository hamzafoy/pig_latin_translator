const express = require('express');
const app = express();
const routes = require('./routes');
const bodyParser = require('body-parser');



app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/static', express.static('public'));
app.use(routes);



app.listen(3001, () => {
    console.log('Let me pull the cord on this lawnmow- err- I mean Pig Latin Translator real quick!');
});

module.exports = app;