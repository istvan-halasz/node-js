const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false })); //body is parsed into properties

app.use((req, res, next) => {
  res.setHeader('Content-Type', 'text/html');
  next(); //goes to the next middleware, doesn't return a response for the request
});

app.use((req, res, next) => {
  const userName = req.body.username || 'Unknown User'; //req.body.username from the parsed body
  res.send(
    `<h1>Hi ${userName}</h1><form method="POST" action="/"><input name="username" type="text"><button type="submit">Send</button></form>`
  );
});

app.listen(3000);
