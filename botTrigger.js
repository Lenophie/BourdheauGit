const interrogators = [
    'help',
    'comment',
    'aide',
    'how',
    "qu'est-ce",
    'what',
    'pourquoi',
    'why'
];

const gitReferences = [
    'git',
    'repository',
    'remote',
    'push',
    'pull',
    'commit',
    'merge'
];

const isMessageTrigger = (message) => {
    return hasElementFromListInMessage(message, gitReferences) && hasElementFromListInMessage(message, interrogators);
};

const hasElementFromListInMessage = (message, list) => {
    for (const element of list) {
        if (message.search(element) > -1) return true;
    }
    return false;
};

var exports = module.exports = {};
exports.isMessageTrigger = isMessageTrigger;