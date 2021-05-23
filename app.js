const express = require('express');
const app = express();
const routes = require('./routes');



app.set('view engine', 'pug');
app.use(routes);



app.listen(3001, () => {
    console.log('Let me pull the cord on this lawnmow- err- I mean Pig Latin Translator real quick!');
});