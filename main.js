const Discord = require('discord.js');
const client = new Discord.Client({ disableEveryone: true });

client.on('ready', () => {
  console.log(`Connécté avec ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === "ping") {
    msg.reply("Pong!");
  }
  if (msg.content === "everyone") {
    msg.channel.send("@everyone", { disableEveryone: false })
  }
  if (msg.content === "noteveryone") {
    msg.channel.send("@everyone")
  }
});

client.login('NjYwNjEyMDcwOTE5NjM0OTcx.XgjGCA.xrq2MfDvZsXAzhhdchxJMue20vc');