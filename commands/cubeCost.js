module.exports = {
    name: 'cubeCost',
    description: "This command displays scrapyard guide",
    execute(message, arg){
        message.channel.send('__**Average Cubing Costs**__:\n',
        {
            files: [
                './images/CubeCost.png'
            ]
        });
    }
}