const db = require("quick.db");
const Discord = require ("discord.js")
const { version } = require('../../package.json');
const ms = require('pretty-ms');
const { version: discordjsVersion } = require('discord.js');
module.exports = {

  name: "developer",

  category: "info",
    aliases: ['developers', 'developer'],
    description: 'Check\'s bot\'s status',
  run: async (client, message, args, del, member) => {
   message.delete();
      message.channel.send(new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle(`${message.author.tag}`)
            .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
            .addField(
              "**• Developers**",
              "Parreelll #7172 , ↷"
            )
          
            .addField('Important Links ','**[Invite Me](https://discord.com/oauth2/authorize?client_id=861249805761642496&permissions=8&scope=bot%20applications.commands)** **• [Support](https://discord.gg/Q48ezXqEeV)**  | **[Website](https://farrellid.github.io/FARxWEB/)**')

            .setTimestamp()
           .setFooter(
           `FARxBOT`,
            client.user.displayAvatarURL()  
      ))
         }
};
