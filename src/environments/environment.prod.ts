// `.env.ts` is generated by the `npm run env` command
// `npm run env` exposes environment variables as JSON for any usage you might
// want, like displaying the version or getting extra config from your CI bot, etc.
// This is useful for granularity you might need beyond just the environment.
// Note that as usual, any environment variables you expose through it will end up in your
// bundle, and you should not use it for any sensitive information like passwords or keys.
import env from './.env';

export const environment = {
  production: true,
  version: env.npm_package_version,
  serverUrl: 'https://api.radio-rundgang.de/v1',
  socketio: 'https://api-live.radio-rundgang.de',
  defaultLanguage: 'US',
  supportedLanguages: ['DE', 'US', 'FR'],
  googleAnalytics: {
    domain: 'auto',
    trackingId: 'UA-24449183-8' // replace with your Tracking Id
  }
};
