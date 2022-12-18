const {EmbedBuilder} = require("discord.js");
const {CommandType} = require("wokcommands");
module.exports = {
  description: 'View the bot latency and uptime!',
  slash: true,

  
  callback: async ({client, message, interaction}) => {
      const embed = new EmbedBuilder()
    .setTitle('Ping')
    .setDescription(`Bot Ping: ${Date.now() - interaction.createdTimestamp}ms. API Ping: ${Math.round(client.ws.ping)}ms.`)
    .addFields([
         {
           name: 'Guilds',
           value: `Active in ${client.guilds.cache.size} guilds.`,
           inline: true,
         },
         {
           name: 'Users',
           value: `${client.users.cache.size} users accounted for.`,
           inline: true,
         },
       ])
    .setTimestamp()
    .setColor('#ffac4d')

    
    await interaction.reply({
       embeds: [embed],
     })
  },
};