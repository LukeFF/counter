'use strict';

const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);

server.listen(8080);

let count = 0;
let highscore = 0;
let $ipsConnected = [];

io.on('connection', function (socket) {
  //const $ipAddress = socket.handshake.address;

  //if (!$ipsConnected.hasOwnProperty($ipAddress)) {
    //$ipsConnected[$ipAddress] = 1;
    count++;

    if (count > highscore) {
      highscore = count;
    }

    /*socket.emit('counter', {
      count: count
    });*/
  //}

  socket.on('disconnect', function () {
    //if ($ipsConnected.hasOwnProperty($ipAddress)) {
      //delete $ipsConnected[$ipAddress];
      count--;

      /*socket.emit('counter', {
        count: count
      });
    }*/
  });
});

app.get('/', function (req, res) {
  res.json({count: count, highscore: highscore});
});