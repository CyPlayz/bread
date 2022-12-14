const { Client, GatewayIntentBits, Collection } = require("discord.js");
const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
	],
});

client.on("ready", () => {
	client.user.setActivity("testy");
	console.log("Online");
});

client.login(process.env.token);