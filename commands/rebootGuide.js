module.exports = {
    name: 'rebootGuide',
    description: "This command displays reboot guide",
    execute(message, arg){
        message.channel.send('__**Reboot Guide:**__\nhttps://docs.google.com/document/d/132E6dGMNTRHwRh0wDU7xKZvW7f7xeBhR3VNs_2WQzrE/edit');
    }
}