const Discord = require("discord.js");
const client = new Discord.Client();
 
 
 
 
 
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setGame(` -help `,'https://www.twitch.tv/zya2d_')
    client.user.setStatus('ldle');
});


//=======================================================================================


	client.on('message', message => {
    if(message.content.includes('discord.gg/')) {
        if(message.member.hasPermission('ADMINISTRATOR')) return;
        message.delete();
        message.guild.member(message.author).addRole(message.guild.roles.find(r => r.name === 'Muted'));
        let embedP = new Discord.RichEmbed()
        .setTitle('❌ | تمت معاقبتك')
        .setAuthor(message.author.username, message.author.avatarURL)
        .addField(`** لقد قمت بمخالفة قوانين السيرفر من خلال نشر روابط اضافة الى سيرفرات اخرى  **` , `**ملاحظة  : إن كآن هذآ الاسكات عن طريق الخطأ الرجاء التوجه والتكلم مع الادآرة**`)
        .addField(`by`,`Master. `)
        .setColor('RED')
        .setThumbnail(message.author.avatarURL)
        .setFooter(`${message.guild.name} Server`, message.guild.iconURL)
        
        message.channel.send(embedP);
    }
});

//============================================================================================

  client.on('message', msg => {
    if(msg.content === '-help')
    msg.reply('** [✅ تم الارســـال بالخــاص ✅] **')
  });
 

  client.on("message", message => {
    if (message.content === "-help") {
     const embed = new Discord.RichEmbed() 
         .setColor("#00FF00")
         .setThumbnail(message.author.avatarURL)
         .setDescription(`**System Kinghell  | BoT
-link | يعطيك الرابط السيرفر الي انت في
....................................
-server | لعرض معلومات السيرفر
....................................
-avatar | لعرض الصورة حقك
....................................
-id | لعرض معلومات حسابك
....................................
-bot | لعرض معلومات البوت
....................................
-clear | لمسح الشات
....................................
-mcskin | يظهر سكنك بماينكراف
....................................
-mc | يقفل لك الشات
....................................
-uc | يفتح لك الشات 
....................................
-new | يفتح لك تكت  
....................................
-close | يقفل لك التكت 

       ** `)
   message.author.sendEmbed(embed)
   
   }
   });
 


 
 


 
client.login("process.env.BOT_TOKEN");
