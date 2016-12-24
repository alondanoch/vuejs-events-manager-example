var express = require('express');
var path = require('path');
//var serveStatic = require('serve-static');
var fetch = require('node-fetch');

var port = process.env.PORT || 5000;

app = express();
//app.use(serveStatic(__dirname));
app.use('/', express.static(__dirname));

app.get('/events-data', (req, res) => {
  //res.json({res: 'devetdata'})
  fetch('https://api.meetup.com/recommended/events?photo-host=public&page=20&sig_id=117557282&lon=34.855499&lat=32.109333&sig=2aded0948a22d341fa2d23a3a13ca1db7d5e9741')
    .then(function (res) {
      return res.json();
    }).then(function (json) {
      //console.log(json);
      res.json(json);
    });
})

app.use('/*', express.static(__dirname));

app.listen(port, function () {
    console.log('server started ' + port);
});