module.exports = {
    name: 'manoGuide',
    description: "This command displays scrapyard guide",
    execute(message, arg){
        message.channel.send('__**Mano Boss Guide**__:\nhttps://maplestory.fandom.com/wiki/Mano');
    }
}