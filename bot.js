const { execSync } = require('child_process');
const { resolve } = require('path');
const Telegraf = require('telegraf');

class Bot {
    constructor(id, token) {
        this.telegraf = new Telegraf(`${id}:${token}`);
        this.initializeBot();
    }

    initializeBot() {
        this.bindBotReplies();
        this.telegraf.startPolling();
    }

    bindBotReplies() {
        this.telegraf.start(ctx => ctx.reply('I am a bot and I can send a pic'));
        this.telegraf.command(
            'picture',
            ctx => ctx.replyWithPhoto({ source: this.getPathToPicture() })
        );
    }

    getPathToPicture() {
        const filename = 'f.jpg';

        execSync(`raspistill -o ${filename} -ex auto -x none`);
        return resolve(filename);
    }
}

module.exports = { Bot };
