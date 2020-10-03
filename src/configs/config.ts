// @ts-ignore
import { CONFIGS } from '@environment';

export const baseURL = `https://configs.widgets.salonmanager.${CONFIGS.domainExtension}/${CONFIGS.version}`;

export const headers = {
  'x-api-key': CONFIGS.xApiKey,
  'x-app-version': CONFIGS.xAppVersion,
  timezone: CONFIGS.timeZone,
};
