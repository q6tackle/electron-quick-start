var io = require('socket.io').listen(3000);
io.sockets.on('connection', function(socket) {
  socket.on('msg', function(data) {
    socket.broadcast.emit('msg', data);
  });
});
