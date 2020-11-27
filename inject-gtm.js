
const replace = require('replace-in-file');
 
const options = {
    files: 'build/index.html',
    from: '</head>',
    to: '<script async src="https://www.googletagmanager.com/gtag/js?id=UA-135985682-1"></script><script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);} gtag(\'js\',new Date()); gtag(\'config\',\'UA-135985682-1\');</script></head>'
};

try {
    replace.sync(options);
} catch (error) {
} 