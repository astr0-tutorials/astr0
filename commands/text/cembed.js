const { MessageEmbed } = require('discord.js-selfbot');
const config = require("../../config.json");

module.exports = {
  name: "cembed",
  aliases: ['ce'],
  description: "Sends a custom embed.",
  usage: "<title>, <text>, [footer text], [thumbnail url]",
  run: async(message, args, command, client) => {

    message.delete();

    async function deleteMessage(me){
      setTimeout(() => {
        me.delete();
      }, 3000)
    }

    const roleColor =
      message.guild.me.displayHexColor === "#000000"
        ? "#ffffff"
        : message.guild.me.displayHexColor;

    var arguments = message.content.replace(">cembed", '').slice(config.prefix.length).split(', ');
    if(arguments.length < 2) return await message.channel.send("You must enter at least a title and a text for your embed. Make sure to split them with commas.").then(m => deleteMessage(m));

    var title = arguments[0];
    var text = arguments[1];
    var cembed = new MessageEmbed()
    .setTitle(title)
    .setColor(roleColor)
    .setDescription(text);

    var footer;
    var thumbnail;

    if(!arguments[2]) footer = "Astr0 self";
    else{
      footer = arguments[2];
    }
    cembed.setFooter(footer, message.author.displayAvatarURL());

    if(!arguments[3]) thumbnail = null;
    else cembed.setThumbnail(arguments[3]);

    message.channel.send(cembed).catch(async error => {
      await message.channel.send("You provided an invalid thumbnail URL.").then(m => deleteMessage(m));
    })

  }
}
