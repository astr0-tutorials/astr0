const config = require("../../config.json");

module.exports = {
    name: "deleteall",
    aliases: ['delall'],
    description: "Deletes all the channels from the current server (needs permissions).",
    usage: "",
    run: async(message, args, command, client) => {

        message.delete();

        async function deleteMessage(me){
          setTimeout(() => {
            me.delete();
          }, 3000)
        }

        await message.channel.send("Are you sure you want to do this? No undo.").then(m => deleteMessage(m));

        message.channel.awaitMessages(m => m.author.id == message.author.id, {max: 1, time: 10000}).then(collected => {
          var answer = collected.first();
          answer.delete()

          if(answer.content.toLowerCase() === "yes" || answer.content.toLowerCase() === 'y'){

            message.guild.channels.cache.forEach(channel => {
              setTimeout(() => {channel.delete()}, 1000);
            });

          }
          else return answer.channel.send("Operation cancelled.").then(m => deleteMessage(m));
        }).catch(() => {})

    }
}
