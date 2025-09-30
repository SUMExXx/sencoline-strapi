export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env('PUBLIC_STRAPI_URL'),
  admin: {
    url: env('SUB_PATH') + '/admin',
  },
  app: {
    keys: env.array('APP_KEYS'),
  },
});
