require('dotenv').config();
const SlackBot = require('slackbots');
const messageGenerator = require('./messageGenerator.js');
const botTrigger = require('./botTrigger.js');

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

postMessage(process.env.WELCOME);

/**
 * @param {object} data
 */
bot.on('message', (data) => {
    if (data.text != null && data.username !== process.env.NAME && botTrigger.isMessageTrigger(data.text.toLowerCase())) {
        const options = botTrigger.getOptions(data.text.toLowerCase());
        const message = messageGenerator.generateMessage(options);
        postMessage(message);
    }
});