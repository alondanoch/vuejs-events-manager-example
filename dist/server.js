var express = require('express');
var path = require('path');
var fetch = require('node-fetch');

var port = process.env.PORT || 5000;
var eventsData = {};
var dayInMili = 86400000;


app = express();
app.use('/', express.static(__dirname));

app.get('/events-data', (req, res) => {
  res.json(eventsData)
})

app.use('/*', express.static(__dirname));

app.listen(port, function () {
  console.log('server started ' + port);
});


var updateMeetupEvetnsRecomended = function () {

  fetch('https://api.meetup.com/recommended/events?photo-host=public&page=40&lon=34.855499&lat=32.109333&key=3b282661651b31583a666a6f13744a13')
    .then(function (res) {
      return res.json();
    }).then(function (jsonData) {
      eventsData = jsonData;
    });
    
}


updateMeetupEvetnsRecomended(); //init for the first time

//update events data every day
setInterval(function(){
  updateMeetupEvetnsRecomended();
}, dayInMili);