// const net = require("net");
const { connect } = require("./client");
const { setUpInput } = require("./input");

console.log("Connecting ...");
// connect();

// send command strings to server through connection object
setUpInput(connect());