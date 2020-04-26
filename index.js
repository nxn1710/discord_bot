const { Client, MessageEmbed, MessageAttachment } = require('discord.js');

const bot = new Client();

const token = 'Njk0ODkyMzU0NTUyODU2NTg2.XqLOTQ.p4HKWTLOvN_xQlIGqM2M3WtbIEA';

const PREFIX = '.';

const fetch = require('node-fetch');

const url = 'https://code.junookyo.xyz/api/ncov-moh/data.json';

let settings = { method: "Get" };

let data;

bot.on('ready', () => {
    console.log('This bot is online!');
})


bot.on('message', async message => {

    let args = message.content.substring(PREFIX.length).split(" ");
    switch (args[0]) {
        case 'cov':
            let covid = await fetch(url, settings)
                .then(res => res.json())
                .then((json) => json.data);

            const exampleEmbed = new MessageEmbed()
                .setColor('#f62500')
                .setURL('https://m.me/nxn1710.page')
                .setAuthor('Nxn1710', 'https://scontent.fdad1-1.fna.fbcdn.net/v/t1.0-9/91056560_2719907111629224_8061680943468904448_n.png?_nc_cat=103&_nc_sid=09cbfe&_nc_ohc=fDwnKX0OCvAAX97o5gg&_nc_ht=scontent.fdad1-1.fna&oh=1ec5daee2074f635c9443a42c90c7666&oe=5EBCB61B', 'https://fb.com/nxn1710')
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
        case 'test':
            const exampleEmbed2 = new MessageEmbed()
                .setColor('#f62500')
                .setTitle('Lịch Thi Chuyên Ngành 2')
                .setDescription('-----------------------------------------------')
                .addFields(
                    { name: 'DBI', value: '\tTime: 15h15 - Date: 20/04/2020' },
                )
                .addFields(
                    { name: 'PRO192', value: '\tTime: 13h30 - Date: 21/04/2020' },
                )
                .addFields(
                    { name: 'MAD101', value: '\tTime: 15h15 - Date: 21/04/2020' },
                )
                .addFields(
                    { name: 'WED201c', value: '\tTime: 7h30 - Date: 04/05/2020' },
                )
                .setTimestamp()
                .setFooter('Good Luck', 'https://stickershop.line-scdn.net/stickershop/v1/product/1298618/LINEStorePC/main.png;compress=true');

            message.channel.send(exampleEmbed2);
            break;
        case 'lichthi':
            const exampleEmbed3 = new MessageEmbed()
                .setColor('#f62500')
                .setURL('http://fap.fpt.edu.vn/temp/Import/trangntx2/7a790795-c7c2-4d73-adc9-8bdaab923925/The%20official%20exam%20schedule%20-%20L%E1%BB%8Bch%20thi%20ch%C3%ADnh%20th%E1%BB%A9c.pdf')
                .setTitle('Lịch Thi Chuyên Ngành 2')
                .setAuthor('Nxn1710', 'https://scontent.fdad1-1.fna.fbcdn.net/v/t1.0-9/91056560_2719907111629224_8061680943468904448_n.png?_nc_cat=103&_nc_sid=09cbfe&_nc_ohc=fDwnKX0OCvAAX97o5gg&_nc_ht=scontent.fdad1-1.fna&oh=1ec5daee2074f635c9443a42c90c7666&oe=5EBCB61B', 'https://fb.com/nxn1710')
                .setDescription('-----------------------------------------------')
                .setThumbnail('https://i.pinimg.com/originals/f3/2d/d2/f32dd26a74a9277a3963060500c7b5a1.png')
                .addFields(
                    { name: ':book: Subject', value: 'WED201c', inline: true },
                    { name: ':clock9: Time', value: '7h30', inline: true },
                    { name: ':calendar_spiral: Date', value: '04/05/2020', inline: true },
                )
                .setTimestamp()
                .setFooter('Good Luck', 'https://stickershop.line-scdn.net/stickershop/v1/product/1298618/LINEStorePC/main.png;compress=true');
            message.channel.send(exampleEmbed3);
            break;
        case 'retake':
            const exampleEmbed4 = new MessageEmbed()
                .setColor('#f62500')
                .setURL('http://fap.fpt.edu.vn/temp/Import/trangntx2/7a790795-c7c2-4d73-adc9-8bdaab923925/The%20official%20exam%20schedule%20-%20L%E1%BB%8Bch%20thi%20ch%C3%ADnh%20th%E1%BB%A9c.pdf')
                .setTitle('Lịch Thi Retake Chuyên Ngành 2')
                .setAuthor('Nxn1710', 'https://scontent.fdad1-1.fna.fbcdn.net/v/t1.0-9/91056560_2719907111629224_8061680943468904448_n.png?_nc_cat=103&_nc_sid=09cbfe&_nc_ohc=fDwnKX0OCvAAX97o5gg&_nc_ht=scontent.fdad1-1.fna&oh=1ec5daee2074f635c9443a42c90c7666&oe=5EBCB61B', 'https://fb.com/nxn1710')
                .setDescription('-----------------------------------------------')
                .setThumbnail('https://i.pinimg.com/originals/f3/2d/d2/f32dd26a74a9277a3963060500c7b5a1.png')
                .addFields(
                    { name: ':book: Subject', value: 'DBI202', inline: true },
                    { name: ':clock9: Time', value: '15h15', inline: true },
                    { name: ':calendar_spiral: Date', value: '27/04/2020', inline: true },
                )
                .addFields(
                    { name: ':book: Subject', value: 'PRO192', inline: true },
                    { name: ':clock9: Time', value: '13h30', inline: true },
                    { name: ':calendar_spiral: Date', value: '28/04/2020', inline: true },
                )
                .addFields(
                    { name: ':book: Subject', value: 'MAD101', inline: true },
                    { name: ':clock9: Time', value: '15h15', inline: true },
                    { name: ':calendar_spiral: Date', value: '28/04/2020', inline: true },
                )
                .addFields(
                    { name: ':book: Subject', value: 'WED201c', inline: true },
                    { name: ':clock9: Time', value: '7h30', inline: true },
                    { name: ':calendar_spiral: Date', value: '09/05/2020', inline: true },
                )
                .setTimestamp()
                .setFooter('Good Luck', 'https://stickershop.line-scdn.net/stickershop/v1/product/1298618/LINEStorePC/main.png;compress=true');
            message.channel.send(exampleEmbed4);
            break;
        case 'botngu':
            message.channel.send("Ngu cai dmm");
            break;
    }
})
bot.login(token); 