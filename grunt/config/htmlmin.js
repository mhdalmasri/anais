module.exports = {
    static: {
        options: {
            removeComments: true,
            collapseWhitespace: true,
            removeScriptTypeAttributes: true,
            removeStyleLinkTypeAttributes: true,
        },
        files: [
            {
                cwd: '<%= paths.static %>',
                dest: '<%= paths.static %>',
                expand: true,
                src: ['**/*.html'],
            },
        ],
    },
};
