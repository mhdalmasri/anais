module.exports = {
    options: {
        baseConfig: {
            extends: ['nikita-react'],
            env: {
                browser: true,
                jest: true,
            },
            overrides: [
                {
                    files: [
                        'Gruntfile.js',
                        'grunt/**/*.js',
                        '<%= paths.src %>/tests/setup/*.js',
                    ],
                    rules: {
                        'import/no-nodejs-modules': 'off',
                        'no-undef': 'off',
                        'func-names': 'off',
                        'global-require': 'off',
                    },
                },
                {
                    files: ['<%= paths.src %>/tests/**/*.js'],
                    rules: {
                        'no-console': 'off',
                    },
                },
            ],
        },
        parser: 'babel-eslint',
        parserOptions: {
            ecmaVersion: 2020,
        },
        cache: true,
        cacheLocation: '<%= paths.tmp %>/.eslintcache',
        useEslintrc: false,
        rules: {
            // override rules here
        },
    },
    check: [
        'Gruntfile.js',
        'grunt/**/*.js',
        '<%= paths.src %>/js/**/*.js',
        '<%= paths.src %>/components/**/*.js',
        '<%= paths.src %>/tests/**/*.js',
    ],
    fix: {
        options: {
            fix: true,
        },
        src: [
            'Gruntfile.js',
            'grunt/**/*.js',
            '<%= paths.src %>/js/**/*.js',
            '<%= paths.src %>/components/**/*.js',
            '<%= paths.src %>/tests/**/*.js',
        ],
    },
};
