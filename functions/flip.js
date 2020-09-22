const { Message } = require("discord.js");

function flip() {
    val = Math.floor(Math.random()*2)
    if(val === 0)
        return 'Heads'
    else
        return 'Tails'
}

exports.flip = flip;