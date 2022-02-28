module.exports = {
    name: 'yezzir',
    description: "this is a ping command!",
    execute(message,args){
        message.channel.send('yez!')
    }
}