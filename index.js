const DisTube = require('distube')
const { Client, Collection } = require('discord.js');
const { TOKEN } = require('./config');
const { loadCommands, loadEvents } = require('./utils/loader.js')

const client = new Client();
["commands", "cooldowns"].forEach(x => client[x] = new Collection());

client.settings = require('./config')
client.distube = new DisTube(client, { searchSongs: true, emitNewSongOnly: true });
client.distube
  .on("playSong", (message, queue, song) => message.channel.send(`Lecture de \`${song.name}\` en cours - \`${song.formattedDuration}\`\nDemander par: ${song.user}`))
	.on("addSong", (message, queue, song) => message.channel.send(`Ajout de ${song.name} - \`${song.formattedDuration}\` par ${song.user}`))

loadCommands(client);
loadEvents(client);

client.login(TOKEN)
client.db = require('./db.json')

client.on('message', message => {
  if (message.type !== 'DEFAULT' || message.author.bot) return

  if (!message.member.hasPermission('MANAGE_CHANNELS') && client.db.lockedChannels.includes(message.channel.id)) return message.delete()
})

client.on('ready', () => {
  const statuses = [
      () => `${client.guilds.cache.size} serveur`,
      () => `${client.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0)} utilisateurs`
  ]
  let i = 0
  setInterval(() => {
      client.user.setActivity(statuses[i](), {type: 'WATCHING'})
      i = ++i % statuses.length
  }, 5e3)
})

