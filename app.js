var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.locals.pretty = true;

app.set('view engine', 'jade');
app.set('views', './views');
app.use(bodyParser.urlencoded({ extended: false}))
app.post('/form_receiver', function(req, res){
  var title = req.body.title;
  var description = req.body.description;
  res.send(title+','+description);
})
app.get('/form', function(req, res){
  res.render('form');
})
app.get('/form_receiver', function(req,res){
  var title = req.query.title;
  var description = req.query.description;
  res.send(title+','+description);
})
app.get('/topic/:id', function(req, res){
  var topics = [
    'Javascript is....',
    'Nodejs is...',
    'Express is...'
  ];
  var output = `
    <a href="/topic/0">Javascript</a><br>
    <a href="/topic/1">Nodejs</a><br>
    <a href="/topic/2">Express</a><br>
    ${topics[req.params.id]}
  `
  res.send(output);
})

app.get('/topic/:id/:mode', function(req, res){
  res.send(req.params.id+','+req.params.mode)
})


app.get('/template', function(req,res){
  res.render('temp', {time:Date(), _title:'Jade'});
})

app.get('/', function(req, res){
  res.send('Hello home page');
});

app.get('/login', function(req, res){
  res.send('Login please');
})

app.get('/dynamic', function(req, res){
  var lis = '';
  for(var i=0; i<5; i++){
    lis = lis + '<li>coding</li>';
  }
  var output = `<!<!DOCTYPE html>
  <html>
   <head>
      <meta charset="utf-8">
      <title></title>
    </head>
    <body>
      Hello, static
      ${lis}
    </body>
  </html>`;
  res.send(output);
})

app.get('/hello.txt', function(req, res){
  res.send()
})
app.use(express.static('public'));

app.listen(3000, function(){
  console.log('Connected 3000 port!');
});
