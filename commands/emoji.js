module.exports = {
    name: '.',
    description: "this is a Hello command!",
    execute(message,args){
        message.channel.send('🐡')
    }
}