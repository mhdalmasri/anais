module.exports = {
    options: {
    },
    src: {
        files: [
            {
                dest: '<%= paths.tmp %>/svg-scss/_svg-icon-map.scss',
                src: ['<%= paths.tmp %>/svg-bgs/*.svg'],
            },
        ],
    },
};
