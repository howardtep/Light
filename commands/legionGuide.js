module.exports = {
    name: 'legionGuide',
    description: "This command displays scrapyard guide",
    execute(message, arg){
        message.channel.send('__**Legion Guide**__:\nhttps://maplestory.fandom.com/wiki/Legion_System');
    }
}