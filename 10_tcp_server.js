const net = require('net');

const server = net.createServer(socket => {
  var d = new Date(Date.now());
  var date = 
    d.getFullYear()+ '-'
    + ('0' + (d.getMonth()+1)).slice(-2) 
    + '-'+('0' + d.getDate()).slice(-2)
    + " "+('0' + d.getHours()).slice(-2) 
    + ":"+d.getMinutes()
  ;

  socket.end(date);
  // socket handling logic
});

server.listen(process.argv[2]);