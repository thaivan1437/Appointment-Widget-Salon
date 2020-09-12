console.log(process.env.PUBLIC_NEXT_ENV)
export const CDN_URL = process.env.PUBLIC_NEXT_ENV === 'development' ? `https://cdn.belmontbeautysalon.net` : 'https://cdn.belmontbeautysalon.com';

export const SENTRY_URL = process.env.PUBLIC_NEXT_ENV === 'development' ? `https://cb9595338c8a4f559e9006bb42caac3f@o257892.ingest.sentry.io/1468398` : 'https://ba897c0588c1409ca37eee455bf89f25@o409134.ingest.sentry.io/5424908';
