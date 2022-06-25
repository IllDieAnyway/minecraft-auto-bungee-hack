const mineflayer = require('mineflayer')
const fs = require('fs');


if (process.argv.length < 3) {
  console.log('Usage : node bot.js <host:port>')
  process.exit(1)
}
var bot = ""

host = process.argv[2].split(':')
try{
bot = mineflayer.createBot({
  host: host[0],
  port: parseInt(host[1]),
  username: makeid(10),  
})
}
catch (e){
  console.log(e)
  process.exit(1)
}

function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}

bot.on('login', function(qwe) {
  console.log("[-] no have vulnerability");
  fs.appendFileSync('out/bad.txt', host[0] + ":" + host[1] + "\n");
  bot.end()
  process.exit(1);
})

bot.on('error', function(qweq) {
  console.log("[-] error");
  fs.appendFileSync('out/error.txt', host[0] + ":" + host[1] + "\n");
  bot.end()
  process.exit(1);
})

bot.on('kicked', function(reason) {
  if (reason.toLowerCase().indexOf('forge') >= 0) {
  console.log("[?] Forge " + host[0] + ":" + host[1]);
  fs.appendFileSync('out/Forge.txt', host[0] + ":" + host[1] + "\n");
  process.exit(1);
  }
  if (reason.toLowerCase().indexOf('ip forwarding') >= 0) {
  console.log("[+] Vulnerability " + host[0] + ":" + host[1]);
  fs.appendFileSync('out/Vuln.txt', host[0] + ":" + host[1] + "\n");
  process.exit(1);
  }
  if (reason.toLowerCase().indexOf('white') >= 0) {
  console.log("[?] WhiteList " + host[0] + ":" + host[1]);
  fs.appendFileSync('out/WhiteList.txt', host[0] + ":" + host[1] + "\n");
  process.exit(1);
  }
  bot.end()
  process.exit(1);
});