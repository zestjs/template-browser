require({
  baseUrl: 'lib',
  paths: {
    'app': '../app'
  },
  map: {
    '*': {
      'selector': 'jquery',
      'css': 'require-css/css',
      'is': 'require-is/is',
      'cs': 'require-coffee/cs'
    }
  }
}, ['app/main']);
