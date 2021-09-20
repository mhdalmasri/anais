module.exports = {
    options: {
        interrupt: true,
        spawn: false,
    },
    grunt: {
        files: ['Gruntfile.js', 'grunt/**/*.js'],
        options: {
            reload: true,
        },
    },
    scss: {
        files: ['<%= paths.src %>/scss/**/*.scss', '<%= paths.src %>/components/**/*.scss'],
        tasks: ['sass-globbing', 'sass:dev', 'postcss:dev'],
    },
    svg_bgs: {
        files: ['<%= paths.src %>/scss/bg-svg-icons/*.svg'],
        tasks: ['clean:tmp', 'imagemin:bgSvg', 'svg2scss', 'sass-globbing', 'sass:dev', 'postcss:dev'],
    },
    js: {
        files: ['<%= paths.src %>/js/**/*', '<%= paths.src %>/components/**/*.{js,ejs,json}', '!<%= paths.src %>/components/**/*.test.js'],
        tasks: ['webpack:dev'],
    },
    html: {
        files: ['<%= paths.src %>/html/**/*.{json,yml,yaml,twig}', '<%= paths.src %>/components/**/*.twig'],
        tasks: ['twigRender:dev'],
    },
};
