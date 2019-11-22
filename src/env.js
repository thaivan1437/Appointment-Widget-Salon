const DOMAIN_ENV= process.env.buildEnv === "development" ? "net" : "com";
console.log("--------env: " + process.env.buildEnv);
export const CDN_URL = `https://cdn.belmontbeautysalon.${DOMAIN_ENV}`;

