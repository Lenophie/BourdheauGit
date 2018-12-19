const introSentences = [
    ["Tu devrais essayer", ""],
    ["Je pense qu'un", "devrait fonctionner"],
    ["Dans le doute, toujours faire un", ""],
    ["La dernière fois, un petit", "a suffi"],
    ["Sur mes projets, j'utilise toujours", ""],
    ["C'est plus simple en faisait un", ""],
    ["C'est assez technique mais on peut essayer de faire", "puis", ""],
    ["Surtout faire un", "après un petit", ""],
    ["", "résout souvent le problème"],
    ["La dernière fois que j'ai fait un", "j'ai dû le réparer en faisant un", "puis un", ""],
    ["Le", "est très souvent sous-estimé"],
    ["Toute équipe sérieuse fait au moins un", "par jour"],
    ["Je propose un simple", ""],
    ["", "everyday"],
    ["100% des apprenants en EBM recommandent l'utilisation de", ""],
    ["Tu peux utiliser", "sans modération"],
    ["Bon, c'est un peu merdique mais on peut faire", ""],
    ["Je préfère utiliser jQuery mais", "c'est une valeur sûre"],
    ["", "est souvent plus safe que", ""]
];
const numberSentences = introSentences.length;

const gitVerbs = [
    'commit',
    'push',
    'rebase',
    'cherrypick',
    'pull',
    'fetch',
    'clone',
    'init',
    'branch',
    'log',
    'checkout master',
    'checkout dev',
    'merge',
    'reset',
    'add *',
    'rm *',
    'revert'
];

const jQueryVerbs = [
    'bind',
    'addEventListener',
    'remove',
    'add',
    'click',
    'append'
];

const gitFlags = [
    'force',
    'soft',
    'hard',
    'easy',
    'all',
    'delete',
    'prune',
    'no-verify',
    'set-upstream',
    'skip',
    'continue'
];

const numberVerbs = gitVerbs.length;
const numberFlags = gitFlags.length;
const numberOfJqueryVerbs = jQueryVerbs.length;

/**
 * @param {Object} options
 * @returns {string}
 */
const generateMessage = (options) => {
    const introSentence = pickIntroSentence();
    const message = fillSentenceWithCommands(introSentence, options);
    return message;
};

/**
 * @param {Object} options
 * @returns {string}
 */
const generateGitCommand = (options) => {
    const numberFlagsInCommand = Math.floor(Math.random() * 2 + 1);
    const verbIndex = Math.floor(Math.random() * (numberVerbs - 1));
    let command = '';
    if (options.jQuery) {
        const jQueryVerbIndex = Math.floor(Math.random() * (numberOfJqueryVerbs - 1));
        command = `$('#git').${jQueryVerbs[jQueryVerbIndex]}('${gitVerbs[verbIndex]}')`
    } else command = `git ${gitVerbs[verbIndex]}`;

    for (let i = 1; i <= numberFlagsInCommand; i++) {
        const flagIndex = Math.floor(Math.random() * (numberFlags - 1));
        command += ` --${gitFlags[flagIndex]}`;
    }

    return command;
};

/**
 * @returns {string}
 */
const pickIntroSentence = () => {
    const introIndex = Math.floor(Math.random() * (numberSentences - 1));
    return introSentences[introIndex];
};

/**
 * @param {array} introSentence
 * @param {Object} options
 * @returns {string}
 */
const fillSentenceWithCommands = (introSentence, options) => {
    let message = "";
    for (let bitIndex = 0; bitIndex < introSentence.length - 1; bitIndex++) {
        message += introSentence[bitIndex];
        const gitCommand = generateGitCommand(options);
        message += ` \`\`\`${gitCommand}\`\`\` `;
    }
    message += introSentence[introSentence.length - 1];
    return message;
};

var exports = module.exports = {};
exports.generateMessage = generateMessage;