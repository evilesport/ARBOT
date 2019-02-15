const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let online = message.guild.members.filter(member => member.user.presence.status !== 'offline');
  let day = message.guild.createdAt.getDate()
  let month = 1 + message.guild.createdAt.getMonth()
  let year = message.guild.createdAt.getFullYear()
   let sicon = message.guild.iconURL;
   let serverembed = new Discord.RichEmbed()
   .setAuthor(message.guild.name, sicon)
   .setFooter(` Server created date • ${day}.${month}.${year}`)
   .setColor("GREEN")
   .setThumbnail(sicon)
   .setTitle('All our server commands')
   .addField('!ban', 'With this command you can ban User')
   .addField('!kick', 'With this command you can kick User')
   .addField('!tmute', 'With this command you can mute User for a specific time. Format: **!tmute <@User> <1s|1h|1d>**')
   .addField('!mute', 'To mute a User for a unlimited Time')
   .addField('!unmute', 'To unmute a User')
   .addField('!support', 'This command is to create a Support Ticktet')
   .addField('!verify', 'To send a Verify message')
   .addField('!welcomeroles', 'This command is to create a Welcomerole message')
   .addField('!log', 'With this command you can Log a channel for a limited time')
   .addField('!purge', 'To delete messages')
   .addField('!poll', 'To make a poll for this server')
   .addField('!invite', 'To create a Invite link for your server')
   .addField('Info', 'If you need help with one of these commands please write **Ich#3226**')
   message.member.send(serverembed);

}