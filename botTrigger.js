const interrogators = [
    'help',
    'comment',
    'aide',
    'how'
];

const isMessageTrigger = (message) => {
    if (message.search('git') > -1) return isThereAnInterrogator(message);
    return false;
};

const isThereAnInterrogator = (message) => {
    for (const interrogator of interrogators) {
        if (message.search(interrogator) > -1) return true;
    }
    return false;
};

var exports = module.exports = {};
exports.isMessageTrigger = isMessageTrigger;