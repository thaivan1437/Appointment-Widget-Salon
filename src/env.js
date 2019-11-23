const DOMAIN_ENV= process.env.NODE_ENV === "development" ? "net" : "com";
console.log("--------env: " + process.env.NODE_ENV);
export const CDN_URL = `https://cdn.belmontbeautysalon.${DOMAIN_ENV}`;

