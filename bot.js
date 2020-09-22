const { flip } = require("./functions/flip");
const Discord = require('discord.js');
const client = new Discord.Client();
const ms = require('ms');
const cheerio = require('cheerio');
const request = require('request');
const fs = require('fs');
const snekfetch = require('snekfetch');
const randomPuppy = require('random-puppy');

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

//const token = 'NzE4Mzc4NTk3OTM2NTI5NDMx.XtoANA.qVZMcfXZRHmOU2-vGi9E7lWlveo';
const prefix = '';

client.on('ready', () =>{
    console.log('Light online');
})

client.on('guildMemberAdd', member =>{
    const channel = member.guild.channels.cache.find(channel => channel.name == "welcome");
    if(!channel) return;
    channel.send(`Welcome to Light ${member}! Please state your preferred name & IGN and an admin will give you a role!`);
})

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot)
        return;
    let arg = message.content.substring(prefix.length).split(" ");
    //obtains user mention
    function getUserFromMention(mention){
        if (!mention) return;
    
        if (mention.startsWith('<@') && mention.endsWith('>')) {
            mention = mention.slice(2, -1);
    
            if (mention.startsWith('!')) {
                mention = mention.slice(1);
            }
    
            return client.users.cache.get(mention);
        }
    };
    var command = [];
    command.push('afterlands');command.push('cubeCost');command.push('denaro');command.push('eGuide');command.push('familiar');
    command.push('guide');command.push('hmuto');command.push('ia');command.push('Legion');command.push('legionSolver');
    command.push('lucid');command.push('oz');command.push('Scrapyard');command.push('soul');command.push('trainingGuide')
    command.push('will');command.push('send');

    commandout = false;
    var string = arg[0];
    var chara = arg[0];
    if(chara[0] == '$')
    {
        string = chara.substring(1).toLowerCase();
        if(string == 'reddit')
        {
            
            if(message.channel.id != message.guild.channels.cache.find(channel => channel.name == 'bot_spam') &&
                message.channel.id != message.guild.channels.cache.find(channel => channel.name == 'memes') )
                { message.channel.send('Please post in ' + message.guild.channels.cache.find(channel => channel.name =='memes').toString()
                    + ' or ' + message.guild.channels.cache.find(channel => channel.name =='bot_spam').toString()); return; }
            else
                randomPuppy(arg[1]).then(url => {
                if(url != null)
                    message.channel.send(url); return;
            })
        }
        else if(message.channel.id != message.guild.channels.cache.find(channel => channel.name == 'bot_spam'))
        {
            for(var i = 0; i < command.length; i++)
                if(command[i].toLowerCase() == string)
                    commandout = true;
            if(commandout == true)
                { message.channel.send('Please post in ' + message.guild.channels.cache.find(channel => channel.name =='bot_spam').toString()); return; }
            else
            return;
        }

        switch(string){

            //Guides
            case 'afterlands':
                client.commands.get('afterlandsGuide').execute(message, arg); break;
            case 'cubecost':
                client.commands.get('cubeCost').execute(message, arg); break;
            case 'denaro':
                client.commands.get('denaroGuide').execute(message, arg); break;
            case 'eguide':
                client.commands.get('equipGuide').execute(message, arg); break;
            case 'familiar':
                client.commands.get('familiarGuide').execute(message, arg); break;
            case 'guide':
                client.commands.get('rebootGuide').execute(message, arg); break;
            case 'hmuto':
                client.commands.get('hmutoGuide').execute(message, arg); break;
            case 'ia':
                client.commands.get('innerAbility').execute(message, arg); break;
            case 'legion':
                client.commands.get('legionGuide').execute(message, arg); break;
            case 'legionsolver':
                client.commands.get('legionSolver').execute(message, arg); break;
            case 'oz':
                client.commands.get('ozGuide').execute(message, arg); break;
            case 'sy': case 'scrap': case 'scrapyard':
                client.commands.get('scrapyard').execute(message, arg); break;
            case 'soul':
                client.commands.get('soulGuide').execute(message, arg); break;
            case 'trainingguide':
                client.commands.get('trainingGuide').execute(message, arg); break;
            case 'sally':
                var user = '188505004120866816'
                message.channel.send(message.guild.members.cache.get(user.name.toString())); break;

            //Boss
            case 'mano':
                client.commands.get('manoGuide').execute(message, arg); break;
            case 'lucid':
                client.commands.get('lucidGuide').execute(message, arg); break;
            case 'will':
                client.commands.get('willGuide').execute(message, arg); break;

            //Etc
            case 'delete':
            if(message.author.id === "342034424008933396")
            {
                if(!arg[1])
                    return message.channel.send('Error please enter how many messages to delete')
                else if(arg[1] > 0 && arg[1] < 11)
                    message.channel.bulkDelete(arg[1]); break;
            }
            case 'flip':
                message.channel.send(flip() + '!'); break;
            case 'send':
                selectImage = arg[1]; selectImage2 = arg[2]; selectImage3 = arg[3];
                selectImage4 = arg[4]; selectImage5 = arg[5]; image(message); break;
            case 'website':
                client.commands.get('msWebsite').execute(message, arg); break;
        }
    }
    else {
        string = chara.toLowerCase();
        switch(string){
        case 'uwu':
            message.channel.send('owo'); break;
        case 'owo':
            message.channel.send('uwu'); break;
        }
    }   

})

function image(message){
    var options = {
        url: "http://results.dogpile.com/serp?qc=images&q=" + selectImage + " " + selectImage2 + " " + selectImage3 + " " + selectImage4,
        method: "GET",
        headers: {
            "Accept": "text/html",
            "User-Agent": "Chrome"
        }
};

request(options, function(error, response, responseBody) {
    if (error) {
        return;
    }
    $ = cheerio.load(responseBody);
    var links = $(".image a.link");
    var urls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"));
    console.log(urls);
    if (!urls.length) {
        return;
    }

    message.channel.send(urls[Math.floor(Math.random() * urls.length)]);
});


}

//client.login(token);
client.login(process.env.token);