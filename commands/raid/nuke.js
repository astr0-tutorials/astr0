const config = require("../../config.json");

module.exports = {
    name: "nuke",
    aliases: [],
    description: "Nukes the current channel.",
    usage: "",
    run: async(message, args, command, client) => {

        message.delete();

        async function deleteMessage(me){
          setTimeout(() => {
            me.delete();
          }, 3000)
        }

        await message.channel.send("Are you sure you want to do this? No undo.");

        const nukedChannel = message.channel;
        const info = nukedChannel.position;
        if(!nukedChannel.deletable) return message.channel.send("This channel cannot be deleted.");

        message.channel.awaitMessages(m => m.author.id == message.author.id, {max: 1, time: 10000}).then(collected => {
          var answer = collected.first();
          answer.delete()

          if(answer.content.toLowerCase() === "yes" || answer.content.toLowerCase() === 'y'){

              nukedChannel.clone().then(c => c.setPosition(info));
              nukedChannel.delete();

          }
          else return answer.channel.send("Operation cancelled.").then(m => deleteMessage(m));
        }).catch(() => {})

    }
}
