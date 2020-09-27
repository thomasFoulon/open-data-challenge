module.exports = {
  env: {
    browser: true,
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020,
    parser: 'babel-eslint',
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  plugins: ['react'],
  rules: {
    'no-use-before-define': 'off',
    'react/jsx-filename-extension': 'off',
    'react/prop-types': 'off',
    'comma-dangle': 'off',
    'react/jsx-props-no-spreading': 'off',
  },
};
