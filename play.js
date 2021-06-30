// const net = require("net");
const connect = require('./client')
console.log("Connecting ...");

// setup interface to handle user input from stdin

const setupInput = function () {
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
};

connect();
setupInput();