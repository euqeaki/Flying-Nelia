module.exports = {
    name: 'yezzir',
    description: "this is a yes command!",
    execute(message,args){
        message.channel.send('yez!')
    }
}