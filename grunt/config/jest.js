module.exports = {
    options: {
        cache: false,
        coverageDirectory: 'reports/coverage',
        collectCoverageFrom: [
            '<%= paths.src %>/js/**/*.js',
            '<%= paths.src %>/components/**/*.js',
            '!<%= paths.src %>/js/_*.js',
        ],
        testMatch: [
            '<rootDir>/<%= paths.src %>/tests/**/*.test.js',
            '<rootDir>/<%= paths.src %>/components/**/*.test.js',
        ],
        transform: {
            '^.+\\.js$': '<rootDir>/<%= paths.src %>/tests/setup/jest.transform.js',
        },
        setupFilesAfterEnv: ['<rootDir>/<%= paths.src %>/tests/setup/jest.setup.js'],
        transformIgnorePatterns: ['/node_modules/'],
        moduleNameMapper: {
        },
    },
    test: {
        options: {
            collectCoverage: false,
        },
    },
    testCoverage: {
        options: {
            collectCoverage: true,
        },
    },
};
