const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', ()  =>{
    console.log('This bot is online!');
})

bot.on('message', message=>{
    
    if (message.author.bot) {
        return;
    }
    
    let wordsInSentence = message.content.split(" ");
    let filteredSentence = '~~'+message.content+'~~'+'\n'; 
    let swearExists = false;
    
    
    for (x = 0 ; x < wordsInSentence.length; x++) {
        
        if(addUwU(wordsInSentence[x].toLowerCase()) == true) {
            filteredSentence +='uwu '
            swearExists = true;
        } else filteredSentence += wordsInSentence[x]+ ' ';
    }
    
    if (swearExists == true) {
        message.delete(); 
        message.reply('**ÙwÚ** dun say that. it bad uwu' + '\n'); 
        message.channel.send(filteredSentence);
    }
    
});

bot.login(process.env.token);

var swearList = [
    
    'fuck',  'fk', 'fucc',  'fak',
    'fok', 'fuk',

    'shit',  'shiet', 'shet', 
    'crap',

    'bitch', 'biatch', 'betch', 'botch', 

    'nigger', 'nigga', 'nibba',

    'cunt', 'ass', 'arse', 'penis', 'dick', 
    'knob', 'prick', 'dum', 'whore', 
    'bullshit', 'cock', 'tits', 'bastard', 'retarded',
    'jesus', 'christ', 'asshole', 'slut', 'damn', 'fag', 
    'pussy', 'idiot', 'stupid', 'frick'

];

function addUwU(word){  
    for (y = 0; y < swearList.length; y++){
        
        if (word.includes(swearList[y]))  {
            
            return true;
        } 
    }
}
