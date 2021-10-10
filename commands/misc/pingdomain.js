const { MessageEmbed } = require('discord.js-selfbot');
const domainPing = require('domain-ping');

module.exports = {
  name: "pingdomain",
  aliases: ['pingd'],
  description: "Check if the provided url is up or down.",
  usage: "<NON ABSOLUTE url>",
  run: async(message, args, command, client) => {

    message.delete();

    async function deleteMessage(me){
      setTimeout(() => {
        me.delete();
      }, 20000)
    }

    const roleColor =
      message.guild.me.displayHexColor === "#000000"
        ? "#ffffff"
        : message.guild.me.displayHexColor;

    var domain = args[0];
    if(!domain) return await message.channel.send("Please enter a domain to ping.").then(m => deleteMessage(m));

    domainPing(domain)
    .then(async(res) => {

      var logs = JSON.stringify(res);

      var isUp = new MessageEmbed()
      .setTitle(`${domain} is responding to ping requests.`)
      .setDescription(`${domain} is up. Full logs from the scans are available down bellow.`)
      .setThumbnail("https://i.imgur.com/SEMO1kx.png")
      .setColor(roleColor)
      .setFooter("Astr0Self", client.user.displayAvatarURL());

      await message.channel.send(isUp).then(m => deleteMessage(m));
      await message.channel.send("```json\n" + logs.split(",").join(",\n") + "```").then(m => deleteMessage(m));

    })
    .catch(async(error) => {

      var logs = JSON.stringify(error);

      var isDown = new MessageEmbed()
      .setTitle(`${domain} is not responding to ping requests.`)
      .setDescription(`${domain} seems to be down. Full logs from the scans are available down bellow.`)
      .setThumbnail("https://i.imgur.com/SEMO1kx.png")
      .setColor(roleColor)
      .setFooter("Astr0Self", client.user.displayAvatarURL());

      await message.channel.send(isDown).then(m => deleteMessage(m));
      await message.channel.send("```json\n" + logs.split(",").join(",\n") + "```").then(m => deleteMessage(m));

    })

  }

}
