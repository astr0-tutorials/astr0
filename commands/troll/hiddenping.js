module.exports = {
  name: "hiddenping",
  aliases: ['hping'],
  description: "hides a ping behind your text",
  usage: "<user ID> <text>",
  run: async(message, args, command, client) => {

    message.delete();

    async function deleteMessage(me){
        setTimeout(() => {
          me.delete();
        }, 3000)
    }

    var userID = args[0];
    if(!userID) await message.channel.send("Please specify the user you want to ghostping.").then(m => deleteMessage(m));

    var userData = message.guild.members.fetch(userID);
    if(!userData) return await message.channel.send("You provided an invalid ID.").then(m => deleteMessage(m));

    var text = args.slice(1).join(' ');
    if(!text) return await message.channel.send("Please enter some text to hide a ping behind.").then(m => deleteMessage(m));

    var final =
    `${text}||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||||||||||<@${userID}>`;

    message.channel.send(final);

  }
}
