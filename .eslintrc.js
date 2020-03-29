module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
        'airbnb-base',
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:import/errors',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended'
    ],
    settings: {
        react: { version: 'detect' },
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx']
            }
        }
    },
    env: {
        node: true,
        browser: true,
        'jest/globals': true
    },
    rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
        'comma-dangle': ['error', 'never'],
        'import/no-extraneous-dependencies': 'off',
        'import/extensions': 'off',
        indent: ['error', 4],
        'prettier/prettier': 'error',
        'lines-between-class-members': 'off',
        'max-len': ['error', 120],
        quotes: ['error', 'single'],
        'react/jsx-indent': ['error', 4],
        'react/jsx-filename-extension': 'off'
    },
    overrides: [
        {
            files: ['**/*.ts'],
            parser: '@typescript-eslint/parser',
            rules: {
                'no-undef': 'off'
            }
        }
    ],
    plugins: ['import', 'prettier', 'jest', 'jsx-a11y', 'react', 'react-hooks']
};
