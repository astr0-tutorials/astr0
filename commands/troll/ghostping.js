module.exports = {
  name: "ghostping",
  aliases: ['gping'],
  description: "Ghostpings an user.",
  usage: "<user ID> [channel mention]",
  run: async(message, args, command, client) => {

    message.delete();

    async function deleteMessage(me){
      setTimeout(() => {
        me.delete();
      }, 3000)
    }

    var userID = args[0];
    if(!userID) return await message.channel.send("Please enter an user ID.").then(m => deleteMessage(m));

    var userData = message.guild.members.fetch(userID);
    if(!userData) return await message.channel.send("You provided an invalid user ID.").then(m => deleteMessage(m));

    var toChannel;
    if(!args[1]) toChannel = message.channel;
    else if(args[1]) toChannel = message.mentions.channels.first();
    if(!toChannel) return await message.channel.send("You provided an invalid channel mention.").then(m => deleteMessage(m));

    await toChannel.send(`<@${userID}>`).then(m => m.delete());

  }
}
