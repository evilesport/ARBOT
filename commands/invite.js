const Discord = require("discord.js");
const moment = require('moment');

exports.run = async (anko, message, args, color) => {
  if (!message.member.hasPermission("CREATE_INSTANT_INVITE")) return;
  message.channel.createInvite({maxAge: 0}).then(invite => {
    let sicon = message.guild.iconURL;
    let embed = new Discord.RichEmbed()
    .setColor(color)
    .setThumbnail(sicon)
    .setAuthor(`Invite request from ${message.author.tag}`, message.author.displayAvatarURL)
    .setFooter(`Invite Created at • ${moment().format('MMMM Do YYYY, h:mm:ss a')}`)
    .addField(`**Permanent Invite Link**:`, `${invite}`);
    message.member.send(embed);
  });
}

exports.help = {
  name: 'createinvite',
}