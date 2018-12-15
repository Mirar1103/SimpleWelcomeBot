/**
 * Created by Maximilian on 15.12.2018.
 */
const Discord = require("discord.js"); // Requires the npm package 'discord.js'.
const client = new Discord.Client();

client.login('NTIzMjg4NzI3NjM2NjcyNTIz.DvXY0A.E3ZlN8Z5voNQTitb3GAy2Fyty6k');
client.on("guildMemberAdd", (member) => {
    let guild = member.guild; // Reading property `guild` of guildmember object.
    let memberTag = member.user.tag; // GuildMembers don't have a tag property, read property user of guildmember to get the user object from it
    if(guild.systemChannel){ // Checking if it's not null
        guild.systemChannel.send("Welcome to our community "+ member.displayName+". \n"+
            "I hope you'll enjoy your time with us, but first you should read the rules pinned in this channel.\n \n" +
             "Oh and before I forget, if you want to be notified about updates of Kitsune, enter ~subme ")
        }
});