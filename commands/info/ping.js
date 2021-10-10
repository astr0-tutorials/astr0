module.exports = {
    name: "ping",
    aliases: ['p'],
    description: "Shows the current latency.",
    run: async (message, args, command, client) => {

      message.delete();

      async function deleteMessage(me){
          setTimeout(() => {
              me.delete();
          }, 3000)
      }

      await message.channel.send("Pinging . . .").then(async m => {
          await m.edit(`Pong! latency is \`${m.createdTimestamp - message.createdTimestamp}ms\``).then(me => deleteMessage(me));
      });

    }
}
