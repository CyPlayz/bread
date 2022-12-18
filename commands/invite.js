const {EmbedBuilder} = require("discord.js");
const {CommandType} = require("wokcommands");
module.exports = {
  description: 'Invite the Bot or join our server!',
  slash: true,

  callback: async ({client, message, interaction}) => {
      const embed = new EmbedBuilder()
    .setTitle('Invite!')
    .setDescription([
			"[Server Invite](https://discord.gg/YjdkYr7)",
			"----------------",
			"[Bot Invite](https://discordapp.com/oauth2/authorize?client_id=639224808948891669&scope=bot&permissions=70569095)"
		])
    .setTimestamp()
    .setColor('#ffac4d')

    await interaction.reply({
       embeds: [embed]
     })
  },
};