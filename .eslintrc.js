module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
        'airbnb-base',
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:import/errors',
        'plugin:@typescript-eslint/recommended'
    ],
    settings: {
        react: { version: 'detect' },
        'import/resolver': {
            node: {
                paths: ["."],
                extensions: ['.js', '.jsx', '.ts', '.tsx']
            }
        }
    },
    env: {
        browser: true,
        'jest/globals': true
    },
    rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
        'comma-dangle': ['error', 'never'],
        'import/no-extraneous-dependencies': 'off',
        'import/extensions': 'off',
        'indent': ['error', 4],
        'lines-between-class-members': 'off',
        'max-len': ['error', 120],
        'quotes': ['error', 'single'],
        'react/jsx-indent': ['error', 4],
        'react/jsx-filename-extension': 'off'
    },
    plugins: [
        'import',
        'jest',
        'jsx-a11y',
        'react',
        'react-hooks'
    ]
};
