module.exports = {
    name: 'scrapyard',
    description: "This command displays scrapyard guide",
    execute(message, arg){
        message.channel.send('__**Scrapyard Reroll Guide**__:\nhttps://docs.google.com/spreadsheets/d/1FJcMQHfhsDNsRQW_KhrmR3uyWmudv8e8Y_nY5uawKAg/edit#gid=0');
    }
}