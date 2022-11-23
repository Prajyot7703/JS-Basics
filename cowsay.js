const cowsay = require("cowsay");
const Quote = require("inspirational-quotes");

// console.log(Quote.getQuote().text);
const This_text = Quote.getQuote().text;

console.log(
  cowsay.say({
    // text: "moooooo",
    text: This_text,

    //eyes of cow
    e: "xx",
    //tongue of cow
    T: "U",
  })
);
