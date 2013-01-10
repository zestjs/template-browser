require({
  baseUrl: 'lib',
  paths: {
    'app': '../app'
  },
  map: {
    '*': {
      'selector': 'jquery',
      'css': 'require-css/css',
      'less': 'require-less/less',
      'is': 'require-is/is',
      'com': 'zest/com',
      'cs': 'require-coffee/cs'
    }
  }
}, ['app/main']);
