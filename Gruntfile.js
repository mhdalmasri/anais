/*
 * project grunt configuration
 *
 * see grunt/config for task configs
 * see grunt/tasks for custom tasks
 * see grunt/aliases.js for task group definitions
 */
module.exports = function (grunt) {
    const path = require('path');

    /* custom helper method to check if config loading is necessary for current running task */
    // eslint-disable-next-line no-param-reassign
    grunt.isConfigLoadingRequired = (taskNames) => {
        const isDefaultTarget = (grunt.cli.tasks.length === 0);
        return (isDefaultTarget || grunt.cli.tasks.some(target => (
            target === 'dev' || target === 'dist' || taskNames.some(taskName => (target.startsWith(taskName)))
        )));
    };

    if (!grunt.option('no-times')) {
        require('time-grunt')(grunt);
    }

    require('load-grunt-config')(grunt, {
        configPath: path.join(process.cwd(), 'grunt/config'),
        overridePath: path.join(process.cwd(), 'grunt'),
        jitGrunt: {
            customTasksDir: 'grunt/tasks',
            staticMappings: {
                postcss: '@lodder/grunt-postcss',
            },
        },
        data: {
            /*
             * project base directories
             */
            paths: {
                src: 'src',
                static: 'static',
                tmp: 'tmp',
            },
            /*
             * dynamic browser list for css autoprefixer and babel-preset-env
             * @see https://github.com/ai/browserslist
             * @see https://browserl.ist/?q=IE+11%2Clast+2+Edge+versions%2Clast+2+Chrome+versions%2Clast+2+Firefox+versions%2Clast+2+Safari+major+versions%2Clast+2+iOS+major+versions%2Clast+2+ChromeAndroid+versions%2CAndroid+%3E%3D+4.4
             */
            browserslist: [
                'IE 11',
                'last 2 Edge versions',
                'last 2 Chrome versions',
                'last 2 Firefox versions',
                'last 3 Safari major versions',
                'last 3 iOS major versions',
                'last 2 ChromeAndroid versions',
                'Android >= 4.4',
            ],
        },
    });
};
