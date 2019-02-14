const { RichEmbed } = require('discord.js');

exports.run = async (client, message, args) => {

    /*
        1) Use the messageReactionAdd and messageReactionRemove events to add/remove users roles
        2) Remove the awaitReactions() function as we won't need that anymore
        3) Customize the message a bit more to fit a general welcome channel
    */

    await message.delete().catch(O_o => {});

    const a = message.guild.roles.get('543401607879196702'); // Moderator
    const b = message.guild.roles.get('542053413932761119'); // Administrator
    const c = message.guild.roles.get('542053430227632130'); // Developer

    const embed = new RichEmbed()
        .setTitle('Available Roles')
        .setDescription(`
       
        Welcome to **${message.guild.name}**! You may choose from our list of roles you can join/leave from:
       <:dev:543937658993377286> ${a.toString()}
       🇧 ${b.toString()}
       🇨 ${c.toString()}
       `)
        .setColor(0xdd9323)
        .setFooter(`Guild ID: ${message.guild.id}`);

    message.channel.send(embed).then(async msg => {

        await msg.react('543937658993377286');
        await msg.react('🇧');
        await msg.react('🇨');
    });
};

exports.help = {
    name: 'welcomeroles'
};