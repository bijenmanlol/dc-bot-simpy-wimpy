const Discord = require("discord.js")
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on("messageCreate", msg => {
  if (msg.content === "ping") {
    msg.reply("pong");
  }
})

client.login("OTE3NDg1MjQ4OTQwNDc0NDA4.Ya5YuQ.KVCgx4IjY9sUb8TcX9jRcq818aY")
