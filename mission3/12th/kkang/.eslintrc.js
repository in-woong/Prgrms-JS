module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2015,
    sourceType: 'module'
  },
  extends: ['eslint:recommended', 'airbnb-base', 'prettier'],
  plugins: ['prettier'],
  ignorePatterns: ['node_modules', '*.config.js'],
  rules: {
    'no-new': 0,
    'import/prefer-default-export': 'off', 
    'import/extensions': [
      'off', 
    ],
  }
}
