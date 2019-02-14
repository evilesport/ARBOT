exports.run = async (client, message, args, level) => {
 const token = "NTQxNTY5NTcwMzUyMjY3Mjk3.D0b2Ww.8w2492xy-EYrZOkwGWR8NCI4lq0"
 if (message.author.id == "356354157260701706")
     message.react('🔁')
     .then(message => client.destroy())
     .then(() => client.login(token))
}


// If you want more commands, upvote this! ;)



exports.conf = {
 enabled: true,
 guildOnly: true,
 permLevel: "Dev"
};

exports.help = {
 name: "reboot",
 category: "Developper",
 description: "Reboot command to reboot the bot.",
 usage: "reboot"
}