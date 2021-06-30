const net = require("net");

// establishes a connection with the game server
const connect = function () {
  // Create conn object that represents server connection
  const conn = net.createConnection({
    host: '135.23.223.133',
    port: 50542
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // handle incoming data and print it for player
  conn.on("data", (data) => {
    console.log(`Server says: ${data}`);
  });
  return conn;
};

module.exports = connect;