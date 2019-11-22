const DOMAIN_ENV= process.env.NODE_ENV === "development" ? "net" : "com";
export const CDN_URL = `https://cdn.belmontbeautysalon.${DOMAIN_ENV}`;

