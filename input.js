const {
  MOVE_UP_KEY,
  MOVE_LEFT_KEY,
  MOVE_DOWN_KEY,
  MOVE_RIGHT_KEY,
  SAY_M1,
  SAY_M2,
  SAY_M3,
  messages
} = require("./constants");

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
  // \u0077 = w
  if (key === MOVE_UP_KEY) {
    connection.write("Move: up");
  }
  // \u0061 = a
  if (key === MOVE_LEFT_KEY) {
    connection.write("Move: left");
  }
  // \u0073 = s
  if (key === MOVE_DOWN_KEY) {
    connection.write("Move: down");
  }
  // \u0064 = d
  if (key === MOVE_RIGHT_KEY) {
    connection.write("Move: right");
  }

  // TODO: Try to use messages object to look up messages within key-value pairs
  // \u006D = m for "Woooo!"
  if (key === SAY_M1) {
    // connection.write("Say: Woooo!")
    connection.write("Say: Woooo!");
  }
  // \u006E = n for "OH NOOO!"
  if (key === SAY_M2) {
    connection.write("Say: OH NOOO!")
  }
  // \u0062 = b for "Look at me!"
  if (key === SAY_M3) {
    connection.write("Say: Look at me!")
  }
};

module.exports = { setUpInput };