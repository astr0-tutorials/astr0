const { MessageEmbed } = require('discord.js-selfbot');

module.exports = {
  name: "embed",
  aliases: ['e'],
  description: "Sends an embed",
  usage: "<text>",
  run: async(message, args, command, client) => {

    message.delete();

    async function deleteMessage(me){
      setTimeout(() => {
        me.delete();
      }, 3000)
    }

    var text = args.slice(0).join(' ');
    if(!text) return await message.channel.send("Please enter some text to put into your embed.").then(m => deleteMessage(m));

    var embed = new MessageEmbed()
    .setDescription(text)
    .setFooter('Astr0 self', message.author.displayAvatarURL());

    message.channel.send(embed);

  }
}
