const Discord = require("discord.js");
const fs = require("fs");
let config = require("../config.json");

module.exports.noPerms = (message, perm) => {
  let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setTitle("NO PERMS")
  .addField("Insufficient Permissions", perm)
  .setColor(config.red);

  message.channel.send(embed).then(m => m.delete(5000)).catch(console.error);
}
