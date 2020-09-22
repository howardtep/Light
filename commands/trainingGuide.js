module.exports = {
    name: 'trainingGuide',
    description: "This command displays scrapyard guide",
    execute(message, arg){
        message.channel.send('__**Training Guide by Kevin**__:\n',
        {
            files: [
                './images/TrainingGuide.png'
            ]
        });
    }
}