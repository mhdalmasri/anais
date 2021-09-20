module.exports = {
    options: {
        force: true,
    },
    static: {
        src: [
            '<%= paths.static %>/**/*.html',
            '<%= paths.static %>/generated',
        ],
    },
    tmp: {
        src: [
            '<%= paths.tmp %>/*',
            '!<%= paths.tmp %>/.eslintcache',
            '!<%= paths.tmp %>/.stylelintcache',
        ],
    },
};
