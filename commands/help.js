const Discord = require("discord.js");
const ping = require("mc-hermes");

//TODO: Test Ping
module.exports.run = async (bot, message, args) => {
  var embed=Discord.Embed(title="Help", description="A list of commands", color=0xe9dd52);
  embed.add_field(name=!mute, value=, inline=True);
  embed.add_field(name=!unmute, value=, inline=True);
  embed.add_field(name=!ip, value=, inline=True);
  embed.add_field(name=!purge, value=, inline=True);
  message.channel.sendEmbed(embed);
}

module.exports.help = {
  name: "help",
  description: "What you're seeing now"
}
