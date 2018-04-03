const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  async function purge(){
    message.delete();

    if (!message.member.roles.find("name", "staff")) {
      message.channel.send('You need the \`staff\` role to use this command.')
      return;
    }

    if(isNaN(args [0])) {
      message.channel.send('Please specify a number');
      return;
    }

    const fetched = await message.channel.fetchMessages({limit: args[0]});
    console.log(fetched.size + ' messages purged');

    message.channel.bulkDelete(fetched).catch(error => message.channel.send(`error: ${error}`));
  }

  purge();
}

module.exports.help = {
  name: "purge",
  description: "Purge the chat"
}
