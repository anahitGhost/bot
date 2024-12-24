const TelegramBot = require('node-telegram-bot-api');

const token = '8042193783:AAGKqFmm_cq1f87QcbVbVkuTP_T5ygSRooI';

const bot = new TelegramBot(token, { polling: false });

bot.onText(/\/start/, (msg) => {
  console.log(msg.reply_markup)
  const chatId = msg.chat.id;

  const opts = {
    reply_markup: {
      resize_keyboard: true,
      one_time_keyboard: true,
      keyboard: [
        [{text: 'start', web_app:{url:'https://web-app-mnmm.onrender.com'}}],
      ],
    }
  };
  bot.sendMessage(chatId, 'Click the button', opts);
});
