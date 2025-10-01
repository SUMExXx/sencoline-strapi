export default [
  'strapi::logger',
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'default-src': ["'self'", 'https://strapi.sencoline.com'],
          'script-src': ["'self'", "'unsafe-inline'", "'unsafe-eval'", 'blob:', 'https://strapi.sencoline.com'],
          'style-src': ["'self'", "'unsafe-inline'", 'https://strapi.sencoline.com'],
          'img-src': ["'self'", 'data:', 'blob:', 'https://strapi.sencoline.com'],
          'connect-src': ["'self'", 'https://strapi.sencoline.com', 'https:', 'ws:', 'wss:'],
          'font-src': ["'self'", 'https://strapi.sencoline.com'],
        },
      },
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
