module.exports = function (grunt) {
    return {
        options: {
            open: false,
            online: true,
            watchTask: true,
            ghostMode: false,
            single: true,
            port: grunt.option('port') || 3000,
            ui: {
                port: grunt.option('port') + 1 || 3001,
            },
            server: {
                baseDir: ['<%= paths.static %>'],
            },
        },
        dev: {
            bsFiles: {
                src: [
                    '<%= paths.static %>/img/**/*.{jpg,jpeg,png,gif,ico,svg}',
                    '<%= paths.static %>/generated/**/*.{css,js}',
                    '<%= paths.static %>/**/*.html',
                ],
            },
        },
    };
};
