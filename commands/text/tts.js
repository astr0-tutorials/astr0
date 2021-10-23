const config = require("../../config.json");

module.exports = {
    name: "tts",
    aliases: [],
    description: "Sends a tts message into the current channel.",
    usage: "<message>",
    run: async(message, args, command, client) => {

        message.delete();

        async function deleteMessage(me){
          setTimeout(() => {
            me.delete();
          }, 3000)
        }

        if(!args) return message.channel.send("Please enter some text to read.").then(m => deleteMessage(m));
        var text = args.join(' ');

        await message.channel.send(text, { tts: true }).then(m => {setTimeout(() => {m.delete()}, 20000)});

    }
}
