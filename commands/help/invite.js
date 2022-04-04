const discord = require("discord.js");

module.exports = {
  name: "invite",
  category: "info",
  description: "INVITE FARxBOT",
  run: async (client, message, args) => {
    
    let embed = new discord.MessageEmbed()
    .setTitle(`Invite Me`)
    .setDescription(`• [Invite Me](https://discord.com/oauth2/authorize?client_id=906899294815145995&permissions=8&scope=bot%20applications.commands)`)
    .setColor("RANDOM")
      .setThumbnail(client.user.displayAvatarURL())
      .setFooter(
      `FARxBOT`,
      client.user.displayAvatarURL(),
      message.delete()
    );
    
    message.channel .send(embed)
    
  
  }
}