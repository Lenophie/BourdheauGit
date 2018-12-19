const interrogators = [
    'help',
    'comment',
    'aide',
    'how',
    "est-ce",
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

const jQueryReferences = [
    'jquery'
];

/**
 * @param {string} message
 * @returns {boolean}
 */
const isMessageTrigger = (message) => {
    return hasElementFromListInMessage(message, gitReferences) && hasElementFromListInMessage(message, interrogators);
};


/**
 * @param {string} message
 * @param {array} list
 * @returns {boolean}
 */
const hasElementFromListInMessage = (message, list) => {
    for (const element of list) {
        if (message.search(element) > -1) return true;
    }
    return false;
};

/**
 * @param {string} message
 * @return {Object}
 */
const getOptions = (message) => {
  const options = {};
  options.jQuery = hasElementFromListInMessage(message, jQueryReferences);
  return options;
};

var exports = module.exports = {};
exports.isMessageTrigger = isMessageTrigger;
exports.getOptions = getOptions;