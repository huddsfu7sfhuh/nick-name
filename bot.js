const Discord = require('discord.js');

const Util = require('discord.js');
    client = new Discord.Client({sisableEveryone: true})
 const devs = ['300482452164575242'];
const adminprefix = "-";

const Eris = require("eris");
var Acura = new Eris("token");
Acura.on("ready", () => {
    console.log("tm");
    onstart();
});
Acura = "487956113694654464";
nick = "D7i";
function onstart(){
    var v1 = nick.split('');
    var counter;
    var i=0;
varAcura 2 = ' ';
  var Acura =   setInterval(function(){

     if (i == v1.length){
     clearInterval(Acura);
     onstart()
      return;
     }
     var v2 = v1[i];
   Acura  += v2;
    Acura.editNickname(D7i);
 
        i++;

     }, 1000);
}
Acura.connect();

client.login(process.env.BOT_TOKEN);
