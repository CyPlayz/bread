const {EmbedBuilder} = require("discord.js");
const {CommandType} = require("wokcommands");
module.exports = {
  description: 'View the bot latency!',
  slash: true,
  testOnly: true,

  callback: async ({client, message, interaction}) => {
      const embed = new EmbedBuilder()
    .setTitle('Bot ping!')
    .setDescription(`Bot Ping is ${Date.now() - interaction.createdTimestamp}ms. API Ping is ${Math.round(client.ws.ping)}ms.`)
    .setTimestamp()
    .setColor('#ffac4d')

    await interaction.reply({
       embeds: [embed],
     })
  },
};