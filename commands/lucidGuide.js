module.exports = {
    name: 'lucidGuide',
    description: "This command displays scrapyard guide",
    execute(message, arg){
        message.channel.send('__**Lucid Boss Guide**__:\nhttps://dexless.com/guides/lucid-for-dummies.311/');
    }
}