const { MessageEmbed } = require("discord.js")

module.exports = (client) => {
  let logs = client.channels.cache.get(client.settings.LOGS)
  if (!logs) return;

    console.log('Prêt et connecté sur ' + client.user.tag + ' !')

    const embed = new MessageEmbed()
    .setColor('RANDOM')
    .setTitle('Réussite :white_check_mark:')
    .setDescription(`${client.user.tag} viens de démarrer !`)
    logs.send(embed);
}
