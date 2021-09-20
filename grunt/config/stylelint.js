module.exports = {
    options: {
        formatter: 'string',
        syntax: 'scss',
        cache: true,
        cacheLocation: '<%= paths.tmp %>/.stylelintcache',
        config: {
            extends: ['stylelint-config-nikita'],
            rules: {
                // override rules here
            },
        },
    },
    check: [
        '<%= paths.src %>/scss/**/*.scss',
        '<%= paths.src %>/components/**/*.scss',
    ],
    fix: {
        options: {
            fix: true,
        },
        src: [
            '<%= paths.src %>/scss/**/*.scss',
            '<%= paths.src %>/components/**/*.scss',
        ],
    },
};
