module.exports = {
    options: {
        // png
        optimizationLevel: 6,
        // jpeg
        progressive: true,
        // gif
        interlaced: true,
        // svg
        svgoPlugins: [
            { cleanupAttrs: true },
            { cleanupEnableBackground: true },
            { cleanupIDs: true },
            { cleanupListOfValues: true },
            { cleanupNumericValues: true },
            { collapseGroups: true },
            { convertColors: true },
            { convertPathData: true },
            { convertShapeToPath: true },
            { convertStyleToAttrs: true },
            { convertTransform: true },
            { mergePaths: true },
            { moveElemsAttrsToGroup: true },
            { moveGroupAttrsToElems: true },
            { removeComments: true },
            { removeDesc: true },
            { removeDoctype: true },
            { removeEditorsNSData: true },
            { removeEmptyAttrs: true },
            { removeEmptyContainers: true },
            { removeEmptyText: true },
            { removeHiddenElems: true },
            { removeMetadata: true },
            { removeNonInheritableGroupAttrs: true },
            { removeRasterImages: true },
            { removeTitle: true },
            { removeUnknownsAndDefaults: true },
            { removeUnusedNS: true },
            { removeUselessDefs: true },
            { removeUselessStrokeAndFill: false }, // Enabling this may cause small details to be removed
            { removeViewBox: false }, // Keep the viewBox because that's where illustrator hides the SVG dimensions
            { removeXMLProcInst: false }, // Enabling this breaks svgcss because it removes the XML header
            { sortAttrs: true },
            { transformsWithOnePath: false }, // Enabling this breaks Illustrator SVGs with complex text
        ],
    },
    bgSvg: {
        files: [
            {
                cwd: '<%= paths.src %>/scss/bg-svg-icons/',
                dest: '<%= paths.tmp %>/svg-bgs/',
                expand: true,
                ext: '.svg',
                src: ['*.svg'],
            },
        ],
    },
    static: {
        files: [
            {
                cwd: '<%= paths.static %>/img/',
                dest: '<%= paths.static %>/img/',
                expand: true,
                src: ['**/*.{jpg,jpeg,png,gif,svg}'],
            },
        ],
    },
};
