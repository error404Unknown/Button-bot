const discord = require("discord.js");
const client = new discord.Client();
const discordButtons = require("discord-buttons-plugin");
const buttonClient = new discordButtons(client)


//unknown
client.on("message", (message) => {
	if(message.content === "!unknown") {
	 const embed = new discord.MessageEmbed()
	 .setTitle("Do you like me ?")
	 .setColor("GREEN");
 //unknown
	 const button1 = new buttonClient.MessageButton()
	 .setLabel("Yes")
	 .setStyle("green") //color
	 .setID("yes")

	 const button2 = new buttonClient.MessageButton()
	 .setLabel("No")
	 .setStyle("red") //color
	 .setID("no")

   const button3 = new buttonClient.MessageButton()
   .setLabel("Follow me on Github")
   .setURL("https://github.com/error404Unknown")

     
     buttonClient.send(null, { channel: message.channel.id, embed, buttons: [ [button1, button2], [button3] ]})
 }
})


buttonClient.on("yes", (inta) => inta.message.reply("Thnanks, i love you "))
buttonClient.on("no", (inta) => {
	inta.message.reply("WTF, shut up bitch")
})
//token 
client.login("TOKEN") 

// join for support https://discord.gg/4AfwVJtdFY