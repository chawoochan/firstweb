var express = require('express');
var app = express();
app.locals.pretty = true;
app.set('view engine', 'jade');
app.set('views', './views');
app.use(express.static('public'));
app.get('/topic', function(req,res){
  var topics = [
    'Javascript is....',
    'Nodejs is....',
    'Express is....'
  ];
  topics[req.query.id]
  res.send();
})
app.get('/param/:module_id/:topic_id', function(req,res){
  res.json(req.params);
})
app.get('/template', function(req,res){
  res.render('temp');
})
app.get('/', function(req,res){
  res.send('Hello World');
});
app.get('/route', function(req,res){
  res.send('Hello Router, <ing src="/route.png"');
})
app.get('/dynamic', function(req,res){
  var output = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title></title>
      </head>
      <body>
          Hello, Static!
      </body>
    </html>

  `;
})
app.listen(3000, function(){
  console.log('Example app listening on port 3000!');
});
