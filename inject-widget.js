
const path = require('path');
const argv = require('yargs').argv;
const replace = require('replace-in-file');

const env = argv.buildEnv || 'development';
const configPath = path.resolve(
    __dirname,
    'src',
    'environments',
    env + '.js'
);


const CONFIGS = require(configPath);

const options = {
    files: 'public/index.html',
    from: '</body>',
    to: '<script src="https://widgets.salonmanager.'+ CONFIGS.domainExtension +'/loader.js" data-sm="'+CONFIGS.locationID+'" defer></script></body>'
};

try {
    const results = replace.sync(options);
} catch (error) {
}