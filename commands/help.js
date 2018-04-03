const Discord = require("discord.js");
const ping = require("mc-hermes");

//TODO: Test Ping
module.exports.run = async (bot, message, args) => {
  fs.readdir("./commands/", (err, files) => {
    if(err) console.log(err);

    let jsfiles = files.filter(f => f.split(".").pop() === "js")

    jsfiles.forEach((f, i) =>{
      let props = require(`./commands/${f}`);
      message.channel.send(`\`!${props.help.name}\` - \`${props.help.description}\``)
    });
  });
}

module.exports.help = {
  name: "help",
  description: "What you're seeing now"
}
