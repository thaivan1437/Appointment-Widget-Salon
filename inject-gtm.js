
const replace = require('replace-in-file');
 
const options = {
    files: 'build/index.html',
    from: '</head>',
    to: `<script async src="https://www.googletagmanager.com/gtag/js?id=UA-135985682-2"></script><script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);} gtag(\'js\',new Date()); gtag(\'config\',\'UA-135985682-2\');</script></head>`
};

try {
    const results = replace.sync(options);
    console.log('Replacement results:',  results);
} catch (error) {
    console.error('Error occurred:', error);
} 