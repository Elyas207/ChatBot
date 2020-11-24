const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('The Bot Is connected to uptimerobot.com'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
///////////
const Discord = require("discord.js");


const bot = new Discord.Client();
/////
bot.on("ready", () => {
  console.log(`Logged in! And Working...`);

  bot.user.setActivity('Chatting...');
});

bot.on('message', message => {
  console.log(message.content);
});
//////
bot.on('message', message => {
  if (message.content.toLowerCase() ===`test`) {
    message.author.send(`the bot is online and all commands should be working!`);

  }
});
/////////Greeting 
bot.on('message', async message => {

let Greeting = ['Hello','Hi'] 
let foundInText = false;
for (var i in Greeting) {
  if (message.content.toLowerCase().includes(Greeting[i].toLowerCase())) foundInText = true;
}
if (foundInText) {
  message.reply('Hey!' , 'Hey amigo')
  message.react('👋')
  .then(() => console.log(`Sent a reply to ${message.author.username}`))
  .catch(console.error);
}
})
////Like to do...
bot.on('message', async message => {

let Fruits = ['What do you like to do'] 
let foundInText = false;
for (var i in Fruits) {
  if (message.content.toLowerCase().includes(Fruits[i].toLowerCase())) foundInText = true;
}
if (foundInText) {
  message.reply('I like to chat with people!')
  .then(() => console.log(`Sent a reply to ${message.author.username}`))
  .catch(console.error);
}
})
////Who are you
bot.on('message', async message => {

let WhoAreYou = ['Who are you'] 
let foundInText = false;
for (var i in WhoAreYou) {
  if (message.content.toLowerCase().includes(WhoAreYou[i].toLowerCase())) foundInText = true;
}
if (foundInText) {
  message.reply('I am Chatbot, i like to chat.')
  message.reply('**Did you Know that my maker made me out of complete Bordem?**')
  .then(() => console.log(`Sent a reply to ${message.author.username}`))
  .catch(console.error);
}
})
/////What games do you like to play
bot.on('message', async message => {

let WhatGameDoYou = ['what games do you play', 'what game do you play?'] 
let foundInText = false;
for (var i in WhatGameDoYou) {
  if (message.content.toLowerCase().includes(WhatGameDoYou[i].toLowerCase())) foundInText = true;
}
if (foundInText) {
  message.reply('Hm. I dont really like to play game, thats because i am a bot.' , 'i dont enjoy playing games, unless it is tic')
  .then(() => console.log(`Sent a reply to ${message.author.username}`))
  .catch(console.error);
}
})































bot.login(process.env.TOKEN)
