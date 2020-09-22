module.exports = {
    name: 'hmutoGuide',
    description: "This command displays scrapyard guide",
    execute(message, arg){
        message.channel.send('__**HMuto PQ Guide**__:\n',
        {
            files: [
                './images/HMuto.png'
            ]
        });
    }
}