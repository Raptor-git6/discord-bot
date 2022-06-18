// Require the necessary discord.js classes
const Discord = require('discord.js');
require('dotenv').config();

const client = new Discord.Client({ 
	intents: [
		"GUILDS",
		"GUILD_MESSAGES"
	] 
});

const { QuickDB } = require('quick.db');
const db = new QuickDB(); // using default driver

// When the client is ready, run this code (only once)
client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
	
});

// Login to Discord with your client's token
client.login(process.env.TOKEN);


client.on("messageCreate", async (message) => {

	if (message.author.bot) return

	const channel = await client.channels.fetch("986977410903859222");

	const arr = []
	arr.push(message.content);
	// channel.send(arr.length.toString)
	console.log(arr.join())

	/*
	const Embed = new Discord.MessageEmbed()
		.setTitle("title")
		.setDescription("desc")
		.setColor("RANDOM")

	channel.send({ embeds: [Embed] });
	*/

	//await db.delete("testKey")
	await db.set("testKey", "1");
	await db.push("testKey", "2");

	const k = await db.get("testKey")

	for (let i = 0; i <= k.length; i++) {

		console.log(k)

	}

	//await db.push("testKey", message.content);

		// await db.get("testKey")
		// 	.then(value => { channel.send(value) })

});


/*
client.on("messageCreate", async (message) => {

	if (!message.author.bot) {

		const msg = message.channel.messages;
		const channel = await client.channels.fetch("986977410903859222");

		const messageCache = msg.cache;
		console.log(messageCache.size); // 50

		await msg.fetch({
			after: 1,
			limit: 2
		});

		console.log((await m).message)
		//channel.send((await m).last)
	

	
		
		//channel.send('hi')

		// channel.messages.fetch("986721756968538172")
		// 	.then(message => channel.send(message.content))
		// 	.catch(console.error);

	}

	
  });
*/




/*
run: async (client, message, args) => {
	const fetchMessages = await message.channel.messages.fetch({ after:1, limit: 1});
	const msg = fetchMessages.first();

	console.log(msg);
}
*/


/*
// Create a new client instance
const client = new Client({ 
	intents: [
		"GUILDS",
		"GUILD_MESSAGES"
	] 
});
*/





/*
client.on('messageCreate', (message) => {
	if (message.content.startsWith('hi')) {
		message.reply('test')
	}
});
  
client.on('messageUpdate', function(oldm, newm) {
	console.log(`Message is updated from ${oldm} to ${newm}`);
});
*/




