const Discord = require("discord.js");
const ping = require("mc-hermes");

//TODO: Test Ping
module.exports.run = async (bot, message, args) => {
  ping({
    type: 'pc',
    server: '94.23.31.40',
    port: '25656'
  })
    .then((data)=>{
        message.channel.send(`Join \`${data.players.online}\` others at \`play.toxicmc.gq\``);
    })
    .catch(console.error);
  }

module.exports.help = {
  name: "ip",
  description: "Get the server IP and the amount of players online"
}
