const TelegramBot = require('node-telegram-bot-api');

const token = '8042193783:AAGKqFmm_cq1f87QcbVbVkuTP_T5ygSRooI';

const bot = new TelegramBot(token, { polling: true });
console.log(bot)


bot.onText(/\/start/, (msg) => {
  console.log(msg.reply_markup)
  const chatId = msg.chat.id;

  const opts = {
    reply_markup: {
      resize_keyboard: true,
      one_time_keyboard: true,
      keyboard: [
        [{text: '6767', web_app:{url:'https://e918-5-134-86-17.ngrok-free.app'}}],
      ],
    }
  };
  bot.sendMessage(chatId, 'Welcome! How can I help you today?', opts);
});
