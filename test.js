const {Client, MessageEmbed ,MessageAttachment} = require('discord.js');

const bot = new Client();

const token = 'Njk0ODkyMzU0NTUyODU2NTg2.XoShtg.DnwZHUljDI9XsSHMHffPQcAhbo4';

const PREFIX = '.';

const fetch = require('node-fetch');
 
const url =  'https://code.junookyo.xyz/api/ncov-moh/data.json';

let settings = { method: "Get" };

let data;

bot.on('ready' ,() =>  {
    console.log('This bot is online!');
})


bot.on('message', async message => {

   let args = message.content.substring(PREFIX.length).split(" ");

   switch (args[0]) {
       case 'cov':
        let covid =  await fetch(url, settings)
                .then(res => res.json())
                .then((json) => json.data);

         const exampleEmbed = new MessageEmbed()
            .setColor('#f62500')
            .setTitle('Thông tin về dịch covid-19')
            .setDescription('-----------------------------------------------')
            .addFields(
                { name: ':earth_americas: Thế giới', value: covid.global.cases, inline: true },
                { name: ':skull_crossbones: Tử vong', value: covid.global.deaths, inline: true },
                { name: ':slight_smile: Phục hồi', value: covid.global.recovered, inline: true },
            )
            .addFields(
                { name: ':flag_vn: Việt Nam', value: covid.vietnam.cases, inline: true },
                { name: ':skull_crossbones: Tử vong', value: covid.vietnam.deaths, inline: true },
                { name: ':slight_smile: Phục hồi', value: covid.vietnam.recovered, inline: true },
            )
            .setTimestamp()

        message.channel.send(exampleEmbed);
           break;
        case 'klmda':
            message.channel.send("https://tenor.com/view/huan-rose-talk-selfie-shout-gif-16605201");
            break;
   }
})
bot.login(token); 