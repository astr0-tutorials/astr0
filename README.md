# Astr0 Selfbot
![image](https://i.imgur.com/3vYbKvz.png)
An advanced discord selfbot, coded in javascript and using discord.js v12.

To get more information about the selfbot, you can watch my youtube videos about it [here](https://www.youtube.com/watch?v=enbUmfm4eEk&list=PL4mZEnmzNtg-jW9Tt6kGf0ql_QATTxFwO).
My goal is to give you a clean and opensource code to edit and play with. Feel free to change and share it!

## Disclaimer
Selfbots are not allowed by discord. I'm not responsable for any of the consequences you could possibly endure.

## Get started
To get started, simply setup the `config.json` file with your user token and your desired prefix. Then run `npm install` to install the required dependencies. Finally, run `node index` to start the selfbot!

## Current commands
### Info
- `help [command name]` will show **dynamically** the current commands. There are organized by category and auto-sync with the commands folder. If an argument is specified, it will return detailed informations on a specific command.
- `ping` shows the current latency.

### Misc
- `iplookup <IPv4 address>` returns informations on an IP address, such as its location.
- `domainping <non-absolute URL>` checks if a domain is responding to ping requests.

### Raid
- `deleteall` deletes all the channels from the current server.
- `nuke` nukes the current channel.
- `spam <current / all>` spams either the current channel or all the channels from a server.

### Text
- `embed <title>, <text>` sends an embed with the specified text and title (splited with a comma).
- `cembed <title>, <text>, [footer text], [image URL]` sends a custom embed with the specified parameters, splited with commas.
- `tts <message>` makes discord read a tts message into the current channel.

### Trolling
- `ghostping <user ID> [channel mention]` pings an user and deletes the message just after (in a specific channel, if specified).
- `hiddenping <user ID> <text>` hides a ping behind text abusing of spoilers.

More commands are added regulary, feel free to suggest commands to add on our [discord server](https://discord.gg/DXGH2NCKg6). Have fun with Astr0!
