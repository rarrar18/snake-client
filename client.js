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

  // print message when connection is established
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: RAR");
  });

  // handle incoming data and print it for player
  conn.on("data", (data) => {
    console.log(`Server says: ${data}`);
  });

  return conn;
};

module.exports = connect;