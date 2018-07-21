const { Bot } = require('./bot');

try {
    new Bot(process.env.BOT_ID, process.env.BOT_TOKEN);
} catch (e) {
    console.log(e);
}
