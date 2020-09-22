module.exports = {
    name: 'denaroGuide',
    description: "This command displays scrapyard guide",
    execute(message, arg){
        message.channel.send('__**Commerci Denaro Guide**__:\n',
        {
            files: [
                './images/Denaro.png'
            ]
        });
    }
}