const { MessageEmbed } = require('discord.js')

module.exports = async (client, member) => {
    const embed = new MessageEmbed()
        .setTitle('Bienvenue')
        .setDescription(`Salut à toi ${member} bienvenue sur le discord du meilleur développeur.`)
        .setColor('#0a00ff')
    
    member.guild.channels.cache.get('832550070163079183').send(embed)
}