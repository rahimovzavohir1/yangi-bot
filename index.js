import TelegramBot from "node-telegram-bot-api";
const TOKEN = "8438960736:AAEk-pjAckWfED44I1U4HjgOxEJTisKuBeI"

const bot = new TelegramBot (TOKEN, {polling: true});

bot.on("message", async function (msg) {
  const chatId = msg.chat.id;
  const text = msg.text;
  const firstname = msg.chat.first_name;
  if (text == "/start") {
    bot.sendMessage(chatId,`Assalomu alakum, ${first_name}`),{
        reply_markup: {
            keyboard: [
                [{text: "Boshlash ⚡️"}]
                [{text: "Menu 📌"}], [{text: "Sozlamalar ⚙️"}],
            ],
            resize_keyboard: true,
        },
    };
  } else if(text == "Boshlash ⚡️")
});
