
const Discord = require('discord.js');
const randomPuppy = require('random-puppy');
module.exports = {
    name: 'redditURL',
    description: "This command displays scrapyard guide",
    execute(message, arg){
        if(message.channel.id != message.guild.channels.cache.find(channel => channel.name == 'bot-spam') ||
                message.channel.id != message.guild.channels.cache.find(channel => channel.name == 'memes') )
                return;
            else
            {
            randomPuppy(arg[1]).then(url => {
                if(url != null)
                    message.channel.send(url);
                }
            )}
        }
    }