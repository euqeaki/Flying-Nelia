module.exports = {
    name: 'i love you',
    description: "this is a love you command!",
    execute(message,args){
        message.channel.send('i love you too ❤️❤️')
    }
}