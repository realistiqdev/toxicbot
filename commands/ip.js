const Discord = require("discord.js");
const ping = require("mc-hermes");

//TODO: Test Ping
module.exports.run = async (bot, message, args) => {
  ping({
    type: 'pc',
    server: 'mcsrv.toxicmc.gq',
    port: '25566'
  })
    .then((data)=>{
        message.channel.send(`Connect using \`play.toxicmc.gq\` \nOnline players: \`${data.players.online}\``);
    })
    .catch(console.error);
  }

module.exports.help = {
  name: "ip"
}
