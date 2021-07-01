const net = require("net");
const { IP, PORT, name } = require("./constants");

// establishes a connection with the game server
const connect = function () {
  // Create conn object that represents server connection
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // print message when connection is established
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    // prints name to server
    conn.write("Name: " + name);
  });

  // handle incoming data and print it for player
  conn.on("data", (data) => {
    console.log(`Server says: ${data}`);
  });

  conn.on("end", () => {
    console.log("Successfully disconnected from game server");
  });
  
  // returns an object that can be used to interact with the server
  return conn;
};

module.exports =  { connect };