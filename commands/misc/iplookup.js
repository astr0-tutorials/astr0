const { MessageEmbed } = require('discord.js-selfbot');
const superagent = require('superagent');

module.exports = {
  name: "iplookup",
  aliases: ['ipl'],
  usage: "<ipv4 address>",
  description: "Returns informations on a provided ip address.",
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

    var ip = args[0];
    if(!ip) return await message.channel.send("Please enter an ip address to scan.").then(m => deleteMessage(m));

    async function lookup(add){

      const address = await superagent.get(`http://ip-api.com/json/${add}`);

      var embed = new MessageEmbed()
      .setTitle("Ip lookup")
      .setDescription(`Query = ${address.body.query}\nStatus = ${address.body.status}\n
      Country = ${address.body.country}\nCountry Code = ${address.body.countryCode}\nRegion name = ${address.body.regionName}\nRegion = ${address.body.region}
      City = ${address.body.city}\nZIP code = ${address.body.zip}\nLatitude / Longitude = ${address.body.lat} / ${address.body.lon}\n
      Timzone = ${address.body.timzone}\n
      ISP = ${address.body.isp}\nORG = ${address.body.org}\nAS = ${address.body.as}\nAS name = ${address.body.asname}\n
      Reverse DNS = ${address.body.reverse}\nMobile = ${address.body.mobile}\nHosting = ${address.body.hosting}`)
      .setThumbnail("https://i.imgur.com/SEMO1kx.png")
      .setColor(roleColor)
      .setFooter("Astr0Self", client.user.displayAvatarURL());

      if(address.body.status === 'fail') return message.channel.send("The address you provided is either blacklisted or invalid.");

      await message.channel.send(embed).then(m => deleteMessage(m));

    }

    lookup(ip);
  }
}
