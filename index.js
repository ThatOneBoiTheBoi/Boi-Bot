const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'Die') {
    msg.reply('no u.');
  }
  if (msg.content === 'die') {
    msg.reply('no u.');
  }
  if (msg.content === 'Perish') {
    msg.reply('why?');
  }
  if (msg.content === 'perish') {
    msg.reply('why?');
  }
  if (msg.content === 'Suffer') {
    msg.reply('go away.');
  }
  if (msg.content === 'suffer') {
    msg.reply('go away.');
  }
  if (msg.content === 'kick the bucket') {
    msg.reply('pick on someone your own size.');
  }
  if (msg.content === 'Kick the bucket') {
    msg.reply('pick on someone your own size.');
  }
  if (msg.content === 'Kick The bucket') {
    msg.reply('pick on someone your own size.');
  }
  if (msg.content === 'Kick The Bucket') {
    msg.reply('pick on someone your own size.');
  }
  if (msg.content === 'Kick the Bucket') {
    msg.reply('pick on someone your own size.');
  }
  if (msg.content === 'cease to exist') {
    msg.reply('do you want to be a Miller?');
  }
  if (msg.content === 'Cease to Exist') {
    msg.reply('do you want to be a Miller?');
  }
  if (msg.content === 'Cease To Exist') {
    msg.reply('do you want to be a Miller?');
  }
});

client.login('NDkwNzU2NzI1OTU2MjgwMzIw.DoCeCA.L9v0f2wlhxqGx6wny0q7ltnnjY4');