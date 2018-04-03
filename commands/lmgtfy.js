const Discord = require("discord.js");
const ping = require("mc-hermes");

//TODO: Test Ping
module.exports.run = async (bot, message, args) => {
  let question = encode(args.join(' '));

  let link = `https://www.lmgtfy.com/?q=${question}`;
  message.channel.send(`**<${link}>**`);
}

module.exports.help = {
  name: "lmgtfy",
  description: "Googles a question"
}
