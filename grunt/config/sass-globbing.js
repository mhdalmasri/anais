module.exports = {
    src: {
        files: [
            {
                expand: true,
                cwd: '<%= paths.src %>/scss',
                dest: '<%= paths.tmp %>',
                src: ['*.scss', '!_*.scss'],
            },
        ],
    },
};
