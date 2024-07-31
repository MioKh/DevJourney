const path = require('path');

module.exports = {
    entry: './src/index.js', // Entry point of your application
    output: {
        filename: 'bundle.js', // Name of the output bundle
        path: path.resolve(__dirname, 'dist'), // Output directory
    },
    module: {
        rules: [
            {
                test: /\.css$/, // Regex to match CSS files
                use: ['style-loader', 'css-loader'], // Loaders to process CSS files
            },
            // Add other loaders here if needed (e.g., for JavaScript, images, etc.)
        ],
    },
    mode: 'development', // Mode (development or production)
};
