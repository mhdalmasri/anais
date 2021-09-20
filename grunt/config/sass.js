module.exports = function (grunt) {

    /* skip loading if task is not necessary for current target */
    if (!grunt.isConfigLoadingRequired(['sass'])) {
        return {};
    }

    const sass = require('node-sass');

    return {
        options: {
            implementation: sass,
            outputStyle: 'nested', // minifying by csso
            includePaths: ['<%= paths.src %>/scss'],
        },
        dev: {
            options: {
                sourceMap: true,
            },
            files: [
                {
                    expand: true,
                    cwd: '<%= paths.tmp %>',
                    dest: '<%= paths.static %>/generated',
                    src: ['*.scss'],
                    ext: '.css',
                },
            ],
        },
        dist: {
            options: {
                sourceMap: false,
            },
            files: [
                {
                    expand: true,
                    cwd: '<%= paths.tmp %>',
                    dest: '<%= paths.static %>/generated',
                    src: ['*.scss'],
                    ext: '.css',
                },
            ],
        },
    };
};
