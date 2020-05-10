module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  env: {
    jest: true,
    es6: true,
    node: true,
  },
  globals: {
    __DEV__: true,
  },
  plugins: [
    '@typescript-eslint',
    'promise',
    'import',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'airbnb-base',
  ],
  rules: {
    // general rules
    'no-console': 0,
    'no-return-await': 2,
    'eqeqeq': 2,
    'guard-for-in': 2,
    'max-classes-per-file': 2,
    'no-else-return': 2,
    'no-unneeded-ternary': 2,
    'prefer-template': 2,
    'no-shadow': 2,

    // typescript-eslint
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-unused-vars': 2,
    '@typescript-eslint/ban-ts-ignore': 0,
    '@typescript-eslint/no-empty-function': 0,
    '@typescript-eslint/no-misused-promises': 1,
    '@typescript-eslint/require-await': 1,
    '@typescript-eslint/unbound-method': 1,

    // promise
    'promise/prefer-await-to-then': 2,
    'promise/prefer-await-to-callbacks': 2,
    'promise/param-names': 2,
    'promise/no-return-wrap': 2,

    // import
    'import/no-default-export': 2,
  },
}
