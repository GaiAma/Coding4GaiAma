// TODO: eslint settings should be per site/package
module.exports = {
  parser: 'babel-eslint',
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'prettier',
    'prettier/react',
    'plugin:jsx-a11y/recommended',
  ],
  plugins: ['react', 'jsx-a11y', `react-hooks`],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'no-console': 'off',
    'no-inner-declarations': 'off',
    'valid-jsdoc': 'off',
    'require-jsdoc': 'off',
    quotes: [
      'error',
      'backtick',
      {
        avoidEscape: true,
      },
    ],
    'consistent-return': ['error'],
    'arrow-body-style': ['error', 'as-needed'],
    'jsx-quotes': ['error', 'prefer-double'],
    semi: ['error', 'never'],
    'object-curly-spacing': ['error', 'always'],
    // 'no-magic-numbers': ['error', { ignore: [1], ignoreArrayIndexes: true }],
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'ignore',
      },
    ],
    'react/prop-types': [
      'error',
      {
        ignore: ['children'],
      },
    ],
    'jsx-a11y/label-has-for': [
      2,
      {
        allowChildren: true,
      },
    ],
  },
  overrides: [
    {
      files: [
        'packages/**/gatsby-browser.js',
        'packages/gatsby/cache-dir/**/*',
      ],
      env: {
        browser: true,
      },
      globals: {
        ___loader: false,
        ___emitter: false,
      },
    },
  ],
}
