import { CONFIGS } from '@environment';
console.log("${CONFIGS.domainExtension}", CONFIGS.domainExtension);
export const CDN_URL = `https://cdn.belmontbeautysalon.${CONFIGS.domainExtension}`;
