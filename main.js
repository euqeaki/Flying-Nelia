const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '-';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandfiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandfiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () =>{ 
    console.log('Flying Nelia is Online!');
    client.user.setActivity('-hello | -yezzir | -react',{type: "WATCHING"}).catch(console.error)
});


client.on('message', msg =>{
    if (msg.content === 'hello'){
        msg.reply('Hello!!');
    }
})

client.on('message', msg =>{
    if (msg.content === 'hello po'){
        msg.reply('Hello po!!');
    }
})

client.on('message', msg =>{
    if (msg.content === 'hi'){
        msg.reply('Hi!!');
    }
})

client.on('message', msg =>{
    if (msg.content === 'hi po'){
        msg.reply('Hello po!!');
    }
})

client.on('message', msg =>{
    if (msg.content === 'tangina mo'){
        msg.reply('tangina mo bobo');
    }
})

client.on('message', message =>{

    let args = message.content.substring(prefix.length).split(" ");

    switch (args[0]){
        case 'react' :
            message.react("🍾");
    }
})

client.on('message', message =>{
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'hello'){
        message.channel.send('hello!!');
    }

    if(command === 'yezzir'){
        client.commands.get('yezzir').execute(message, args);
    }
})



client.login(process.env.token);
