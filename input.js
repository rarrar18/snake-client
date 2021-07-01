const { messages } = require("./constants");

// Stores the active TCP connection object, used to send move commands/messages to server
// reference to object returned by connect(), has global scope
let connection;

// setup interface to handle user input from stdin
const setUpInput = function (conn) {
  // accepts the object returned by connect(), passed into setUpInput()
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  // registers cb as the "data" cb handler for stdin
  stdin.on("data", handleUserInput);
  return stdin;
};

// specify what happens when "data:" is received from stdin (eg. when key is pressed)
const handleUserInput = function (key) {
  // \u0003 maps to ctrl+c input
  if (key === '\u0003') {
    process.exit();
  }
  // look up the value for each char's key-value pair
  connection.write(messages[key]);
};

module.exports = { setUpInput };