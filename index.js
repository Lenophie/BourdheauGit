require('dotenv').config();
const SlackBot = require('slackbots');
const messageGenerator = require('./messageGenerator.js');

const bot = new SlackBot({
    token: process.env.TOKEN,
    name: process.env.NAME
});

const params = {
    icon_emoji: process.env.EMOJI
};

/**
 * @param {string} message
 */
const postMessage = (message) => {
    bot.postMessageToChannel(process.env.CHANNEL, message, params);
};

postMessage('Bourdheau\'Git est en ligne ! Pose-moi une question à propos de Git !');

/**
 * @param {object} data
 */
bot.on('message', (data) => {
    if (data.text != null && data.text.search('help') > -1 && data.text.search('git') > -1) {
        const message = messageGenerator.generateMessage();
        postMessage(message);
    }
});