const express = require('express');
const exphbs  = require('express-handlebars');
const db = require('./models')
const path = require('path');
var PORT = process.env.PORT || 3000;

var app = express();


app.use(express.static('public'));
app.use(express.static('img'));
 
app.engine('handlebars', exphbs({defaultLayout: "main"}));
app.set('view engine', 'handlebars');
app.use(require('./routes'))

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
db.sequelize.sync({force: false}).then(()=>{
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
})
