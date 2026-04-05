export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event);
  const token = config.telegramToken;
  const chatId = config.telegramChatId;

  const body = await readBody(event);

  const message = [
    `<b>🚀 Нове замовлення сайту!</b>`,
    `<b>👤 Клієнт:</b> ${body.name}`,
    `<b>📧 Email:</b> <code>${body.email}</code>`,
    `<b>📞 Тел:</b> <code>${body.phone}</code>`,
    `<b>📁 Тип:</b> ${body.projectType}`,
    `<b>💰 Бюджет:</b> ${body.budget}`,
    `\n<b>📝 Опис проекту:</b>`,
    `<i>${body.description}</i>`,
  ].join("\n");

  try {
    return await $fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      body: {
        chat_id: chatId,
        parse_mode: "HTML",
        text: message,
      },
    });
  } catch (e) {
    throw createError({ statusCode: 500, message: "Помилка Telegram API" });
  }
});
