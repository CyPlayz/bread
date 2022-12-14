const {CommandType} = require("wokcommands");
module.exports = {
  description: 'Bot Latency',
  slash: true,
  testOnly: true,

  callback: ({client, message, interaction }) => {
      interaction.reply(`Bot Ping is ${Date.now() - interaction.createdTimestamp}ms. API Ping is ${Math.round(client.ws.ping)}ms`);
  },
};