const botconfig = require("./botconfig.json");
const Discord = require("discord.js")
const prefix = "!" 
var nazwabota = "BlckisBOT"
var wersia = "v2.0"
var up_info = "Nowe komendy !📝💻"



const bot = new Discord.Client({disableEveryone: true})


bot.on("ready", async () => {
    bot.user.setActivity('Blackis YT', { type: "WATCHING" })
        console.log(`${nazwabota} jestem online`)

});

bot.on("message", async message => {
    if (message.author.bot) return;
 
    if (message.content.indexOf(prefix) !== 0) return;
    var args = message.content.slice(prefix.length).trim().split(/ +/g);
    var command = args.shift().toLowerCase()



if(command == ("say")){
    message.delete()

    if(message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(message.content.slice(prefix.length+3)) 
    else
    return message.channel.send("Nie posiadasz permisji do uzywania tej komendyn!")  
}



if(command == "bany"){
    var embed = new Discord.MessageEmbed()
    .setDescription("Brak banów :)")
    .setTitle("Bany❌")
    .setColor(`#800080`)
    .setImage('https://forum.worldofwarships.com/applications/core/interface/imageproxy/imageproxy.php?img=https://gifimage.net/wp-content/uploads/2017/07/ban-hammer-gif-5.gif&key=0be5f107b69a6308110ea73bc51df73c1452e97d959b216b0019018e0f638211')
    message.channel.send(embed)

} 


if(command == "help"){
    var embed = new Discord.MessageEmbed()
    .setDescription("***!help - Wyświetla liste komend \n!bany - Wyświetla liste osób zbanowanych na serwerze Discord i Youtube\n!live - Wyświetla godzine live i jak sie zacznie to link\n!sub - Wyświetla kanał youtube \n!info - Wyświetla linki do najnowszych informaci z kanału\n!rola - [użycie @wzmianka roli/nazwa i oznaczenie admina i moderatora] Wysyła prośbe o role***")
    .setTitle("komendy")
    .setColor(`#800080`)
    .setImage('https://media.giphy.com/media/12W5Sg2koWYnwA/giphy.gif')
    message.channel.send(embed)

} 
if(command == "live"){
    var embed = new Discord.MessageEmbed()
    .setDescription("'***live o 13 (26.02.21)***'")
    .setURL("https://youtu.be/dYcKkPXfXwg")
    .setTitle("live💪🎥🎬")
    .setColor(`#800080`)
    message.channel.send(embed)

} 

if(command == "sub"){
    var embed = new Discord.MessageEmbed()
    .setDescription("zostaw suba ! https://tiny.pl/rlsd3")
    .setTitle("Kanał🎬")
    .setColor(`#800080`)
    message.channel.send(embed)

} 

if(command == "error"){
    var embed = new Discord.MessageEmbed()
    .setDescription("Sorry error 404:/")
    .setTitle("error")
    .setColor(`#800080`)
    .setThumbnail('https://i.imgur.com/wSTFkRM.png') 
    message.channel.send(embed)

} 

if(command == "info"){
    var embed = new Discord.MessageEmbed()
    .setDescription("***Najnowszy odcinek na kanale Blackis YT zostaw łapeczke i suba :)***\nhttps://youtu.be/d78zTrLWQR0 \n***Najnowszy zapisek live na kanale Blackis YT zostaw łapeczke i suba :)***\n https://youtu.be/dYcKkPXfXwg")
    .setTitle("powiadomienia Youtube")
    .setColor(`#800080`)
    .setImage('https://www.niemanlab.org/images/subscribe-animation.gif')
    message.channel.send(embed)

} 


if(command == "rola"){
    var embed = new Discord.MessageEmbed()
    .setDescription("***Wysłano prośbe o role ! \nnie zapomnij oznaczyć moderacje króla pytonów i administracje!\nmożliwe role to: \nopiekun 18+\nwszystkie role gracz***")
    .setTitle("wysłano!")
    .setColor(`#800080`)
    .setImage('https://media.tenor.com/images/f6421a51ace7034d7a1f90fb27146f62/tenor.gif')
    message.channel.send(embed)

} 






   
});


bot.login(botconfig.token)
