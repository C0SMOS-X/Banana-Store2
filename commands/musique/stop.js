const Discord = require("discord.js");

module.exports.run = async (client, msg) => {

            if (!msg.guild.voiceConnection) return msg.channel.send(client.I18n.translate`⚠ Je ne suis pas connectée dans un salon-vocal !`)
                
                if (!msg.member.voiceChannel) return msg.channel.send(client.I18n.translate`⚠ Vous devez être connecté dans un salon-vocal !`)
                                
                if(!msg.member.voiceChannel.speakable) return msg.channel.send(client.I18n.translate`⚠ Je n'ai pas la permission de \`rejoindre\` ou \`parler\` dans ce salon !`).catch(err => console.log(err));


            if(!msg.guild.voiceConnection.player.dispatcher || msg.guild.voiceConnection.player.dispatcher.paused) return msg.channel.send(client.I18n.translate`⚠ Le bot ne joue pas !`);

                msg.guild.voiceConnection.player.dispatcher.end()
            
            let queue = client.fonctions.enqueue(msg.guild.id);
                
                msg.channel.send(client.I18n.translate`✅ Je me suis bien arrêté`);

                if (queue.length == 0) return;

                for (var i = queue.length - 1; i >= 0; i--) {
                    queue.splice(i, 1);
                }
}

module.exports.help = {
    name : "stop",
    usage: "stop",
    description: "Faire stop la queue et la mise en marche de la musique",
    type: "musique",
    category: 'musique'
}