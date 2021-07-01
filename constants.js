// client.js consts
const IP = '135.23.223.133';
const PORT = 50542;
const name = 'RAR';

const messages = {
  '\u006D': "Say: Woooo!",
  '\u006E': "Say: OH NOOO!",
  '\u0062': "Say: Look at me!",
  "w": "Move: up",
  "a": "Move: left",
  "s": "Move: down",
  "d": "Move: right"
};

// exports consts using property value syntax
module.exports = {
  IP,
  PORT,
  name,
  messages,
};