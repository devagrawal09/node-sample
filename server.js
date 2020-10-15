var express = require('express');
var app = express();

const isProduction = process.env.PRODUCTION === `true`;

// Jade
app.set('views', __dirname+'/views');
app.set('view engine', 'jade');

app.get('/', function(req, res){
  res.render('home', {
    title: "Home",
    date: new Date().toLocaleString(`en-US`, { timeZone: `America/Atikokan` }),
    isProduction
  });
});

app.get('/about-us', function(req, res){
  res.render('about-us', {
    title: "About us",
    date: new Date().toLocaleString(`en-US`, { timeZone: `America/Atikokan` }),
    isProduction
  });
});

app.listen(3000,()=>{
  console.log('Server is running on port 3000');
});
