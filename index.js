const { Client, MessageEmbed, MessageAttachment } = require('discord.js');

const bot = new Client();

const token = 'Njk0ODkyMzU0NTUyODU2NTg2.Xw59lA.-PFtQV_6agiS8uupewtfPtcLWEY';

const PREFIX = '.';

const fetch = require('node-fetch');

const url = 'https://code.junookyo.xyz/api/ncov-moh/data.json';

const ulrAPI = 'https://jav-rest-api-htpvmrzjet.now.sh/api/actress?name=Mikami';

let settings = { method: "Get" };

let data;
// var server = client.guilds..get('serverID');


bot.on('ready', () => {
    console.log('This bot is online!');
    setTimeout(function () { // in leftToEight() milliseconds run this:
        sendMessage(); // send the message once
        var dayMillseconds = 1000 * 60 * 60 * 24;
        setInterval(function () { // repeat this every 24 hours
            sendMessage();
        }, dayMillseconds)
    }, leftToEight())
})
function leftToEight() {
    var d = new Date();
    return (-d + d.setHours(8, 0, 0, 0));
}

function sendMessage() {
    var guild = bot.guilds.cache.get('637988330188832774');
    if (guild && guild.channels.cache.get('680276317471768578')) {
        guild.channels.cache.get('680276317471768578').send("");
    }
}


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
        case 'lichthi':
            const exampleEmbed3 = new MessageEmbed()
                .setColor('#f62500')
                .setURL('http://fap.fpt.edu.vn/temp/Import/trangntx2/121c2f1d-b2f8-48e7-bdef-93070da22581/CN%20SU20.pdf')
                .setTitle('Lịch Thi Chuyên Ngành 3')
                .setAuthor('Nxn1710', 'https://scontent.fdad1-1.fna.fbcdn.net/v/t1.0-9/91056560_2719907111629224_8061680943468904448_n.png?_nc_cat=103&_nc_sid=09cbfe&_nc_ohc=fDwnKX0OCvAAX97o5gg&_nc_ht=scontent.fdad1-1.fna&oh=1ec5daee2074f635c9443a42c90c7666&oe=5EBCB61B', 'https://fb.com/nxn1710')
                .setDescription('-----------------------------------------------')
                .setThumbnail('https://i.pinimg.com/originals/f3/2d/d2/f32dd26a74a9277a3963060500c7b5a1.png')
                .addFields(
                    { name: ':book: Subject', value: 'CSD201', inline: true },
                    { name: ':clock9: Time', value: '8h15', inline: true },
                    { name: ':calendar_spiral: Date', value: '05/08/2020', inline: true },
                )
                .addFields(
                    { name: ':book: Subject', value: 'JPD111', inline: true },
                    { name: ':clock9: Time', value: '15h30', inline: true },
                    { name: ':calendar_spiral: Date', value: '05/08/2020', inline: true },
                )
                .addFields(
                    { name: ':book: Subject', value: 'OSG202', inline: true },
                    { name: ':clock9: Time', value: '10h00', inline: true },
                    { name: ':calendar_spiral: Date', value: '06/08/2020', inline: true },
                )
                .addFields(
                    { name: ':book: Subject', value: 'PRJ311', inline: true },
                    { name: ':clock9: Time', value: '13h45', inline: true },
                    { name: ':calendar_spiral: Date', value: '06/08/2020', inline: true },
                )
                .setTimestamp()
                .setFooter('Good Luck', 'https://stickershop.line-scdn.net/stickershop/v1/product/1298618/LINEStorePC/main.png;compress=true');
            message.channel.send(exampleEmbed3);
            break;
        case 'retake':
            const exampleEmbed4 = new MessageEmbed()
                .setColor('#f62500')
                .setURL('http://fap.fpt.edu.vn/temp/Import/trangntx2/121c2f1d-b2f8-48e7-bdef-93070da22581/CN%20SU20.pdf')
                .setTitle('Lịch Thi Retake Chuyên Ngành 3')
                .setAuthor('Nxn1710', 'https://scontent.fdad1-1.fna.fbcdn.net/v/t1.0-9/91056560_2719907111629224_8061680943468904448_n.png?_nc_cat=103&_nc_sid=09cbfe&_nc_ohc=fDwnKX0OCvAAX97o5gg&_nc_ht=scontent.fdad1-1.fna&oh=1ec5daee2074f635c9443a42c90c7666&oe=5EBCB61B', 'https://fb.com/nxn1710')
                .setDescription('-----------------------------------------------')
                .setThumbnail('https://i.pinimg.com/originals/f3/2d/d2/f32dd26a74a9277a3963060500c7b5a1.png')
                .addFields(
                    { name: ':book: Subject', value: 'CSD201', inline: true },
                    { name: ':clock9: Time', value: '8h15', inline: true },
                    { name: ':calendar_spiral: Date', value: '13/08/2020', inline: true },
                )
                .addFields(
                    { name: ':book: Subject', value: 'JPD111', inline: true },
                    { name: ':clock9: Time', value: '15h30', inline: true },
                    { name: ':calendar_spiral: Date', value: '13/08/2020', inline: true },
                )
                .addFields(
                    { name: ':book: Subject', value: 'OSG202', inline: true },
                    { name: ':clock9: Time', value: '10h00', inline: true },
                    { name: ':calendar_spiral: Date', value: '14/08/2020', inline: true },
                )
                .addFields(
                    { name: ':book: Subject', value: 'PRJ311', inline: true },
                    { name: ':clock9: Time', value: '13h45', inline: true },
                    { name: ':calendar_spiral: Date', value: '14/08/2020', inline: true },
                )
                .setTimestamp()
                .setFooter('Good Luck', 'https://stickershop.line-scdn.net/stickershop/v1/product/1298618/LINEStorePC/main.png;compress=true');
            message.channel.send(exampleEmbed4);
            break;
        case 'botngu':
            message.channel.send("Ngu cai dmm");
            break;
        // case 'test':
        //     const a = new MessageEmbed()
        //         .setColor('#0099ff')
        //         .setTitle('Some title')
        //         .setURL('https://discord.js.org/')
        //         .setAuthor('Some name', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')
        //         .setDescription('Some description here')
        //         .setThumbnail('https://i.imgur.com/wSTFkRM.png')
        //         .addFields(
        //             { name: 'Regular field title', value: 'Some value here' },
        //             { name: '\u200B', value: '\u200B' },
        //             { name: 'Inline field title', value: 'Some value here', inline: true },
        //             { name: 'Inline field title', value: 'Some value here', inline: true },
        //         )
        //         .addField('Inline field title', 'Some value here', true)
        //         .setImage('https://i.imgur.com/wSTFkRM.png')
        //         .setTimestamp()
        //         .setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');

        //     message.channel.send(a);
        //     break;
        case 'lichhoc':
            var random = Math.floor(Math.random() * 11);
            const exampleEmbed5 = new MessageEmbed()
                .setColor('#f62500')
                .setURL('http://fap.fpt.edu.vn/Report/ScheduleOfWeek.aspx')
                .setTitle('Lịch Học Chuyên Ngành 3 - SE1404')
                .setDescription('-----------------------------------------------')
                .setThumbnail('https://upload.wikimedia.org/wikipedia/vi/8/80/FPT_New_Logo.png')
                .addFields(
                    { name: 'Monday', value: 'CSD201', inline: true },
                    { name: 'Slot', value: '4 5 6 at 202', inline: true },
                    // { name: 'Room', value: '202', inline: true },
                    { name: 'Start Time', value: '12h30', inline: true },
                )
                .addFields(
                    { name: 'Wednesday', value: 'LAB211', inline: true },
                    { name: 'Slot', value: '4 5 6 at 202', inline: true },
                    // { name: 'Room', value: '202', inline: true },
                    { name: 'Start Time', value: '12h30', inline: true },
                )
                .addFields(
                    { name: 'Thursday', value: 'OSG202', inline: true },
                    { name: 'Slot', value: '4 5 6 at 202', inline: true },
                    // { name: 'Room', value: '202', inline: true },
                    { name: 'Start Time', value: '12h30', inline: true },
                )
                .addFields(
                    { name: 'Friday', value: 'PRJ311', inline: true },
                    { name: 'Slot', value: '4 5 6 at 202', inline: true },
                    // { name: 'Room', value: '202', inline: true },
                    { name: 'Start Time', value: '12h30', inline: true },
                )
                .addFields(
                    { name: 'Saturday', value: 'JPD111', inline: true },
                    { name: 'Slot', value: '1 2 3 at 205', inline: true },
                    // { name: 'Room', value: '202', inline: true },
                    { name: 'Start Time', value: '7h00', inline: true },
                )
                .setTimestamp()
                .setFooter(`Click vào title để check fap ${random}`);
            if (random == 3 || random == 2) {
                message.channel.send("Lên fap mà check ");
            } else {
                message.channel.send(exampleEmbed5);
            }
            break;
    }
})
bot.login(token); 