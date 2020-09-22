module.exports = {
    name: 'equipGuide',
    description: "This command displays scrapyard guide",
    execute(message, arg){
        message.channel.send('__**Reboot Equipment Guide**__:\nhttps://docs.google.com/presentation/d/1cvwscy79thl_jahbjQlw60KzIiEEYUFd7gBwqajACfY/edit#slide=id.p');
    }
}