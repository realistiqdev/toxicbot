const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(!message.member.hasPermission("MANAGE_MEMBERS")) return errors.noPerms(message, "MANAGE_MEMBERS");
  let member = message.mentions.members.first();
  if(!member) return message.reply("Please specify a member.");
  let muteRole = message.guild.roles.find("name", "Muted");
  if(!muteRole) return message.reply("You don't have a role by the name of \`Muted\`.");
  member.removeRole(muteRole.id);
  message.channel.send(`${member.user.tag} has been unmuted.`);
}

module.exports.help = {
  name: "unmute",
  description: "Unmute a member"
}
