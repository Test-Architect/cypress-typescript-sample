module.exports = {
    env: {
        browser: true,
        node: true,
        mocha: true,
        'cypress/globals': true,
    },
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'cypress', 'prettier'],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:cypress/recommended',
        'prettier',
    ],
    ignorePatterns: ['.eslintrc.js', 'cypress.config.ts'],
    rules: {
        '@typescript-eslint/no-explicit-any': 'off',
        'cypress/no-unnecessary-waiting': 'off',
        'prettier/prettier': 'error',
        '@typescript-eslint/no-unused-vars': [
            'error',
            { 'varsIgnorePattern': '^_' }
          ]
    },
};
