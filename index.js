// index.js
const mineflayer = require('mineflayer')

function startBot() {
  const bot = mineflayer.createBot({
    host: "SUNUCU_IP",  // lord.sdlf.fun
    port: 25565,
    username: "BotIsmi"  // minebot
  })

  bot.on('login', () => {
    console.log("Bot sunucuya bağlandı!")
  })

  bot.on('end', () => {
    console.log("Bot bağlantısı kesildi, yeniden bağlanıyor...")
    setTimeout(startBot, 5000)
  })

  bot.on('error', err => console.log("Hata:", err))
}

startBot()
