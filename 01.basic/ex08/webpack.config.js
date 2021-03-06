const path = require('path');

module.exports = (env) => {
    const entry = path.resolve(`src/${env.src}/index.js`);
    return {
        mode: 'development',
        entry: entry,
        output: {
            path: path.resolve('public'),
            filename: 'bundle.js',
            assetModuleFilename: 'assets/images/[hash][ext]'
        },
        module: {
            rules: [{
                test: /\.(sa|sc|c)ss$/i, // 순서가 중요하다.
                use: ['style-loader', 'css-loader', 'sass-loader'] 
            },{
                test: /\.(png|gif|jpe?g|svg|ico|tiff?|bmp)$/i,
                type: 'asset/resource'
            },{
                test: /\.js$/i,
                exclude: /node_modules/,
                use: ['babel-loader'] 
            }]
        },
        devtool: "eval-source-map",
        devServer: {
            host: '0.0.0.0',
            port: 9999,
            liveReload: true,
            hot: false,
            compress: true,
            historyApiFallback: true
        }
    }
};