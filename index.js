const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const fs = require("fs");
const prefix = botconfig.prefix;

const bot = new Discord.Client({disableEveryone: true});

bot.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {
  if(err) console.log(err);

  let jsfiles = files.filter(f => f.split(".").pop() === "js")
  if(jsfiles.length <= 0){
    console.log("No commands found.")
    return;
  }

  console.log(`Loading ${jsfiles.length} commands!`);


  jsfiles.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${i + 1}: ${f} loaded!`);
    bot.commands.set(props.help.name, props);
  });
});

bot .on("ready", async () => {
  console.log(`${bot.user.username} is online!`)

  bot.user.setActivity("toxicmc.gq", {type: "PLAYING"});
});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let messageArray = message.content.split(/\s+/g);
  let command = messageArray[0];
  let args = messageArray.slice(1);

  let cmd = bot.commands.get(command.slice(prefix.length));
  if (cmd) cmd.run(bot, message, args);
});

bot.login(botconfig.token);
