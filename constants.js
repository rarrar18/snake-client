// client.js consts
const IP = '135.23.223.133';
const PORT = 50542;

// input.js consts - movement commands
const MOVE_UP_KEY = '\u0077'; // w
const MOVE_LEFT_KEY = '\u0061'; // a
const MOVE_DOWN_KEY = '\u0073'; // s
const MOVE_RIGHT_KEY = '\u0064'; // d

// input.js consts - message commands
const SAY_M1 = '\u006D'; // m for "Woooo!"
const SAY_M2 = '\u006E'; // n for "OH NOOO!"
const SAY_M3 = '\u0062'; // b for "Look at me!"

const messages = {
  '\u006D': "Woooo!",
  '\u006E': "OH NOOO!",
  '\u0062': "Look at me!"
};

// exports consts using property value syntax
module.exports = {
  IP,
  PORT,
  MOVE_UP_KEY,
  MOVE_LEFT_KEY,
  MOVE_DOWN_KEY,
  MOVE_RIGHT_KEY,
  SAY_M1,
  SAY_M2,
  SAY_M3,
  messages
};