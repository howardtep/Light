const Discord = require('discord.js');
module.exports = {
    name: 'profile',
    description: "This command displays user profiles",
    execute(message, arg){
        const embed = new Discord.MessageEmbed()
        .setColor(0xE74C4C)
        .setTimestamp()
        .setTitle('User Information')
        .addField('User Name', message.author.username, true)
        .addField('Server', message.guild, true)
        .addField('User ID', message.author.id)
        .setThumbnail(message.author.displayAvatarURL())
        message.channel.send(embed);
    }
}