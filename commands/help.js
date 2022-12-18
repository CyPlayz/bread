const {EmbedBuilder} = require("discord.js");
const {CommandType} = require("wokcommands");
module.exports = {
  description: 'See all available commands',
  slash: true,

  callback: async ({client, message, interaction}) => {
      const embed = new EmbedBuilder()
    .setTitle('Commands')
    .addFields({
      name: '/Ping', value: 'Displays stats about the bot!'})
    .addFields({
      name: '/invite', value: 'Invite the bot or join our server!'})
    .setTimestamp()
    .setColor('#ffac4d')

    await interaction.reply({
       embeds: [embed],
     })
  },
};