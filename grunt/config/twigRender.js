module.exports = function (grunt) {
    const now = new Date();

    return {
        options: {
            strict_variables: false,
            rethrow: true,
            namespaces: {
                data: '<%= paths.src %>/html/data/',
                layouts: '<%= paths.src %>/html/layouts/',
                partials: '<%= paths.src %>/html/partials/',
                components: '<%= paths.src %>/components/',
                macros: '<%= paths.src %>/html/macros/',
            },
            extensions: [
                function (Twig) {
                    /* custom implementation for twig.js, @see https://symfony.com/doc/current/reference/twig_reference.html#asset */
                    Twig.exports.extendFunction('asset', assetPath => `${assetPath}?${now.getTime()}`);

                    /* custom implementation for twig.js, @see https://twig.symfony.com/doc/2.x/functions/html_classes.html */
                    Twig.exports.extendFunction('html_classes', (...expressions) => {
                        const classes = [];

                        expressions.forEach((expression) => {
                            if (expression) {
                                if (typeof expression === 'string') {
                                    classes.push(expression);
                                } else {
                                    Object.keys(expression).forEach((key) => {
                                        if (key !== '_keys' && expression[key]) {
                                            classes.push(key);
                                        }
                                    });
                                }
                            }
                        });

                        return [...new Set(classes)].join(' ');
                    });

                    /* function to generate html attributes string from object */
                    Twig.exports.extendFunction('html_attr', (attributes) => {
                        let output = '';
                        const escape = value => (String(value)
                            .replace('"', '&quot;')
                            .replace('<', '&lt;')
                        );

                        Object.keys(attributes).forEach((attribute) => {
                            const value = attributes[attribute];

                            if (value === true) {
                                output += ` ${attribute}`;
                            } else if (typeof value === 'string' || typeof value === 'number') {
                                output += ` ${attribute}="${escape(value)}"`;
                            }
                        });

                        return output;
                    });

                    /* function to import json/yaml test data */
                    Twig.exports.extendFunction('data', function data(filename) {
                        const namespacePath = Twig.path.parsePath.apply(this.template, [this.template, filename]);

                        if (/\.yml$/i.test(namespacePath) || /\.yaml/i.test(namespacePath)) {
                            return grunt.file.readYAML(namespacePath);
                        }
                        return grunt.file.readJSON(namespacePath);

                    });
                },
            ],
        },
        dev: {
            files: [
                {
                    data: {
                        production: false,
                    },
                    expand: true,
                    cwd: '<%= paths.src %>/html/pages/',
                    src: ['**/*.twig'],
                    dest: '<%= paths.static %>/',
                    ext: '.html',
                },
            ],
        },
        dist: {
            files: [
                {
                    data: [
                        {
                            production: true,
                        },
                    ],
                    expand: true,
                    cwd: '<%= paths.src %>/html/pages/',
                    src: ['**/*.twig'],
                    dest: '<%= paths.static %>/',
                    ext: '.html',
                },
            ],
        },
    };
};
