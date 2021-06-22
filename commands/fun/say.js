const Discord = require("discord.js");

module.exports.run = (client, message, args) => {

if(!message.member.hasPermission('ADMINISTATOR')) {
    return message.channel.send("Vous n'êtes pas le propriétaire du bot !");
}
let msg = args.join(" ")
if(!msg) return message.channel.send("Je ne sais pas ce que je dois dire !")
message.delete()
message.channel.send(msg);
}

module.exports.help = {
    name: 'say',
    category: 'fun',
    description: 'permet de faire dire des messages par le bot',
    cooldown: 5
  };