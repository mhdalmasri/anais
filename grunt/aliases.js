module.exports = {

    // supported options:
    // --port:     specify BrowserSync port
    // --no-times: disable time-grunt

    // standard build task when calling grunt without arguments
    // development build task including server and watch
    default: [
        'dev',
        'browserSync:dev',
        'watch',
    ],

    // development build task
    dev: [
        'clean:static',
        'clean:tmp',
        'imagemin:bgSvg',
        'svg2scss',
        'sass-globbing',
        'sass:dev',
        'postcss:dev',
        'twigRender:dev',
        'webpack:dev',
    ],

    // distribution task
    dist: [
        'clean:static',
        'clean:tmp',
        'imagemin:bgSvg',
        'svg2scss',
        'sass-globbing',
        'sass:dist',
        'postcss:dist',
        'twigRender:dist',
        'webpack:dist',
        'htmlmin',
    ],

    // testing tasks
    //
    // supported options:
    //   --watch: start in watch mode
    //   --ci:    omits snapshot generation
    test: ['jest:test'],
    'test-coverage': ['jest:testCoverage'],

    // image tasks
    'minify-images': ['imagemin:static'],
    'generate-appicons': ['realFavicon:static'],

    // linting and fixing tasks
    'check-code': [
        'check-js',
        'check-scss',
    ],

    'fix-code': [
        'fix-js',
        'fix-scss',
    ],

    'check-scss': ['stylelint:check'],
    'fix-scss': ['stylelint:fix'],

    'check-js': ['eslint:check'],
    'fix-js': ['eslint:fix'],

    'check-licenses': ['license-checker:all'],

    // analyze tasks
    'analyze-js': ['webpack:analyze'],
};
