const {CommandType} = require("wokcommands");
module.exports = {
  description: 'Pong',
  slash: true,
  testOnly: true,

  callback: ({interaction}) => {
    interaction.reply('Pong')
  },
};