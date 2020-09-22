module.exports = {
    name: 'soulGuide',
    description: "This command displays scrapyard guide",
    execute(message, arg){
        message.channel.send('__**Soul Tier List**__:\n',
        {
            files: [
                './images/Soul.png'
            ]
        });
    }
}