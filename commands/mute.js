const Discord = require("discord.js");
const ms = require("ms");
const errors = require("./utils/errors.js");

module.exports.run = async (bot, message, args) => {
  if(!message.member.hasPermission("MANAGE_MEMBERS")) return errors.noPerms(message, "MANAGE_MEMBERS");
  let member = message.mentions.members.first();
  if(!member) return message.reply("Please specify a member.");
  let muteRole = message.guild.roles.find("name", "Muted");
  if(!muteRole) return message.reply("You don't have a role by the name of \`Muted\`.");

  let params = message.content.split(" ").slice(1);
  let time = params[1];
  if(!time) return message.reply("Please specify an amount of time to mute for.");

  member.addRole(muteRole.id);
  message.channel.send(`${member.user.tag} has been muted for ${ms(ms(time), {long: true})}.`);

  setTimeout(function(){
    member.removeRole(muteRole.id);
    message.channel.send(`${member.user.tag} has been unmuted.`)
  }, ms(time));
}

module.exports.help = {
  name: "mute",
  description: "Mute a member for a certain amount of time"
}
