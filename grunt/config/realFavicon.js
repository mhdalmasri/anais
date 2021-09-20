module.exports = {
    options: {
        iconsPath: 'img/appicons/',
        design: {
            ios: {
                pictureAspect: 'noChange',
                assets: {
                    ios6AndPriorIcons: false,
                    ios7AndLaterIcons: false,
                    precomposedIcons: true,
                    declareOnlyDefaultIcon: true,
                },
            },
            desktopBrowser: {},
            windows: {
                pictureAspect: 'noChange',
                backgroundColor: '#b0ca0a',
                onConflict: 'override',
                assets: {
                    windows80Ie10Tile: false,
                    windows10Ie11EdgeTiles: {
                        small: false,
                        medium: true,
                        big: false,
                        rectangle: false,
                    },
                },
            },
            androidChrome: {
                pictureAspect: 'noChange',
                themeColor: '#ffffff',
                manifest: {
                    // name: 'myproject',
                    display: 'standalone',
                    orientation: 'notSet',
                    onConflict: 'override',
                    declared: true,
                },
                assets: {
                    legacyIcon: false,
                    lowResolutionIcons: false,
                },
            },
            safariPinnedTab: {
                pictureAspect: 'blackAndWhite',
                threshold: 90.625,
            },
        },
        settings: {
            compression: 1,
            scalingAlgorithm: 'Mitchell',
            errorOnImageTooSmall: false,
            readmeFile: false,
            htmlCodeFile: false,
            usePathAsIs: false,
        },
        versioning: {
            paramName: 'v',
            paramValue: '1',
        },
    },
    static: {
        src: '<%= paths.static %>/img/appicons/_source.png',
        dest: '<%= paths.static %>/img/appicons/',
    },
};
