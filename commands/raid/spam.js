const config = require("../../config.json");

module.exports = {
    name: "spam",
    aliases: ['sp'],
    description: "Spam either the current channel or all channels for 60 seconds.",
    usage: "<current/all>",
    run: async(message, args, command, client) => {

        message.delete();

        async function deleteMessage(me){
          setTimeout(() => {
            me.delete();
          }, 3000)
        }

        if(!args[0]) return message.channel.send("Please specify if you want to spam this channel or all channels (`current / all`).").then(m => deleteMessage(m));

        var spamming;

        await message.channel.send("Are you sure you want to do this? No undo.").then(m => deleteMessage(m));

        message.channel.awaitMessages(m => m.author.id == message.author.id, {max: 1, time: 10000}).then(collected => {
          var answer = collected.first();
          answer.delete()

          if(answer.content.toLowerCase() === "yes" || answer.content.toLowerCase() === 'y'){

              if(args[0] === 'current'){

                  function SpamFunc(){
                      message.channel.send("**Astr0 selfbot got you (:**");
                  }
                  spamming = setInterval(SpamFunc, 2000);

                  setTimeout(() => {
                      clearInterval(spamming);
                  }, 10000);

              }

              else if(args[0] === 'all'){

                  message.guild.channels.cache.forEach(chan => {

                      function SpamFunc(){
                          chan.send("**Astr0 selfbot got you (:**");
                      }
                      spamming = setInterval(SpamFunc, 2000);

                      setTimeout(() => {
                          clearInterval(spamming);
                      }, 10000);

                  })

              }

          }
          else return answer.channel.send("Operation cancelled.").then(m => deleteMessage(m));
        }).catch(() => {})

    }
}
