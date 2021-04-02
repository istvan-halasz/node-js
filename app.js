const express = require('express');
const bodyParser = require('body-parser');

const locationRoutes = require('./routes/location');

const app = express();

//app.set('view engine', 'ejs');
//app.set('views', 'views');

//app.use(bodyParser.urlencoded({ extended: false })); //body is parsed into properties

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use(locationRoutes);

//app.use((req, res, next) => {
//  res.setHeader('Content-Type', 'text/html');
//  next(); //goes to the next middleware, doesn't return a response for the request
//});

//app.use((req, res, next) => {
//  const userName = req.body.username || 'Unknown User'; //req.body.username from the parsed body
//  res.render('index', { //index file from views folder
//    user: userName
//  });
//});

app.listen(3000);
