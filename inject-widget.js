
const path = require('path');
const argv = require('yargs').argv;
const replace = require('replace-in-file');

const env = argv.buildEnv || 'development';
// console.log(env);
const configPath = path.resolve(
    __dirname,
    'src',
    'environments',
    env + '.js'
);

// console.log(configPath)

const CONFIGS = require(configPath);
// console.log(CONFIGS);

const options = {
    files: 'build/index.html',
    from: '</body>',
    to: '<script src="https://widgets.salonmanager.'+ CONFIGS.domainExtension +'/loader.js" data-sm="'+CONFIGS.widgetAppId+'"></script></body>'
};
// const optionsLocal = {
//     files: 'public/index.html',
//     from: '</body>',
//     to: '<script src="https://widgets.salonmanager.'+ CONFIGS.domainExtension +'/loader.js" data-sm="'+CONFIGS.widgetAppId+'"></script></body>'
// };

try {
    // replace.sync(optionsLocal);
    const results = replace.sync(options);
    console.log('Replacement results:',  results);
} catch (error) {
    console.error('Error occurred:', error);
} 