var express = require('express'),
  app = express(),
  path = require('path'),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Task = require('./api/task/model'),
  bodyParser = require('body-parser');
  
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb', { useMongoClient: true }); 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'dist')));

var routes = require('./api/task/route');

routes(app);

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'dist/index.html'));
// });

app.listen(port);

console.log('task list RESTful API server started on: ' + port);
