const Discord = require("discord.js");
const mcping = require('mc-ping-updated');

//TODO: Test Ping
module.exports.run = async (bot, message, args) => {
  mcping('mcsrv.toxicmc.gq', 25566, function(err, res) {
    if (err) {
      message.channel.send(`ERROR: ${err}`);
    } else {
      message.channel.send(`Connect using \`play.toxicmc.gq\`\nThere are currently ${res} players online`)
    }
  }

module.exports.help = {
  name: "ip"
}
