module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'prettier',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
  },
  parser: 'babel-eslint',
  plugins: ['react', 'prettier', 'lodash', 'import'],
  rules: {
    'standard/computed-property-even-spacing': 'off',
    'lodash/import-scope': 'error',
    'react/jsx-no-undef': ['error', { allowGlobals: true }],
    'prefer-const': 'error',
    'no-var': 'error',
    'prefer-template': 'error',
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'index',
          'sibling',
          'parent',
          'internal',
        ],
        'newlines-between': 'never',
      },
    ],
    'react/prop-types': 0,
    'react/jsx-key': 0,
    'import/no-duplicates': 'error',
    'import/newline-after-import': 'error',
    'react/no-access-state-in-setstate': 'error',
    'prettier/prettier': 'error',
  },
  settings: {
    react: {
      createClass: 'createReactClass',
      pragma: 'React',
      version: '16.12',
    },
  },
};
