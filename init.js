var
  ssl = true,
  express = require('express'),
  app = express()

  app.use('/static_res', express.static(__dirname+ '/static_res'))
  app.get('/', function (req, res) {
    res.sendFile(__dirname + req.path); 
  });
  app.get('/news_base/news_page.html', function (req, res) {
    if (req.query.new != null)
    {
      res.sendFile(__dirname + req.path); 
    }
    else
    {
      res.sendFile(__dirname + req.path); 
    }
  });
  app.listen(process.env.PORT || 3000,"0.0.0.0", function () {
    console.log('Example app listening on port 3000!');
  });