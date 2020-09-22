module.exports = {
    name: 'ozGuide',
    description: "This command displays scrapyard guide",
    execute(message, arg){
        message.channel.send('__**Tower of Oz Guide**__:\nhttps://dexless.com/guides/tower-of-oz-comprehensive-guide.145/');
    }
}