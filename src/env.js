// import * as CONFIGS from '@environment';
// console.log(env.CONFIGS.CONFIGS)
// console.log("${CONFIGS.domainExtension}", CONFIGS.domainExtension);
// console.log(process.env.NODE_ENV)
export const CDN_URL = process.env.NODE_ENV === 'development' ? `https://cdn.belmontbeautysalon.net` : 'https://cdn.belmontbeautysalon.com';
