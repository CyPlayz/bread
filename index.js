const { Client, GatewayIntentBits, Collection } = require("discord.js");
const WOK = require('wokcommands');
const path = require('path');
const client = new Client({
	intents: [
	  GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
	],
})

client.on("ready", () => {
  client.user.setActivity("Remember to stay toasty!");
	console.log("Online")

  new WOK({client,
    commandsDir: path.join(__dirname, "commands"),
    testServers: ['1007713364950122619','542479723255562240'],
  })
});
  
client.login(process.env.token);