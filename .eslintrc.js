// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    // allow debugger during development
    'no-console': 'off',
    'no-magic-numbers': 'off',
    'no-shadow': 'off',
    'filenames/match-regex': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  },
  'globals': {
    'process': true,
    'Promise': true
  }
}
