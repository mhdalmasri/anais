module.exports = function (grunt, options) {

    /* skip loading if task is not necessary for current target */
    if (!grunt.isConfigLoadingRequired(['postcss'])) {
        return {};
    }

    const autoprefixer = require('autoprefixer');
    const csso = require('postcss-csso');

    return {
        dev: {
            options: {
                map: true,
                processors: [
                    autoprefixer({
                        overrideBrowserslist: options.browserslist,
                    }),
                ],
            },
            src: '<%= paths.static %>/generated/*.css',
        },
        dist: {
            options: {
                processors: [
                    autoprefixer({
                        overrideBrowserslist: options.browserslist,
                    }),
                    csso({
                        restructure: false,
                    }),
                ],
            },
            src: '<%= paths.static %>/generated/*.css',
        },
    };
};
