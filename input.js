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
  if (key === '\u0077') {
    // console.log("Move: up");
    connection.write("Move: up");
  }
  // \u0061 = a
  if (key === '\u0061') {
    connection.write("Move: left");
  }
  // \u0073 = s
  if (key === '\u0073') {
    connection.write("Move: down");
  }
  // \u0064 = d
  if (key === '\u0064') {
    connection.write("Move: right");
  }
};

module.exports = { setUpInput };