module.exports = {
    name: 'familiarGuide',
    description: "This command displays scrapyard guide",
    execute(message, arg){
        message.channel.send('__**Familiar Guide**__:\nhttps://itzdarkvoid.wordpress.com/tag/maplestory-familiar-guide/');
    }
}