Package.describe({
  name: 'kadira:graphql',
  summary: 'GraphQL support for Meteor with Lokka',
  version: '1.0.0',
  git: 'https://github.com/kadirahq/meteor-graphql.git'
});

Npm.depends({
  'graphql': '0.4.14',
  'lokka': '1.3.1'
});

Package.onUse(function(api) {
  configure(api);
  api.export('GraphQL');
});

Package.onTest(function(api) {
  configure(api);
});

function configure(api) {
  api.versionsFrom('1.0');
  api.use('ecmascript');
  api.use('check');
  api.addFiles('server/graphql.js', 'server');
  api.addFiles('server/transport.js', 'server');
}