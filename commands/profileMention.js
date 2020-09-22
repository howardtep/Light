const Discord = require('discord.js');
module.exports = {
    name: 'profileMention',
    description: "This command displays profiles of mentioned users",
    execute(message, arg){
        const embed = new Discord.MessageEmbed()
        .setColor(0xE74C4C)
        .setTimestamp()
        .setTitle('User Information')
        .addField('User Name', user.username, true)
        .addField('Server', message.guild, true)
        .addField('User ID', user.username)
        .setThumbnail(user.displayAvatarURL())
        message.channel.send(embed);
    }
}