const AntDesignThemePlugin = require('antd-theme-webpack-plugin');

const options = {
    antDir: path.join(__dirname, './node_modules/antd'),
    stylesDir: path.join(__dirname, './src/styles'),
    varFile: path.join(__dirname, './src/styles/variables.less'),
    themeVariables: ['@primary-color'],
    indexFileName: 'index.html'
}

const themePlugin = new AntDesignThemePlugin(options);
// In plugins section, add this plugin instance
// plugins: [ themePlugin, some other plugins ]
// webpack.config.js
module.exports = {
    rules: [{
        test: /\.less$/,
        use: [{
            loader: 'style-loader',
        }, {
            loader: 'css-loader', // translates CSS into CommonJS
        }, {
            loader: 'less-loader', // compiles Less to CSS
            options: {
             lessOptions: { // If you are using less-loader@5 please spread the lessOptions to options directly
               modifyVars: {
                   'primary-color': '#1DA57A',
                   'link-color': '#1DA57A',
                   'border-radius-base': '2px',
              },
                 javascriptEnabled: true,
             },
        },
}],
// ...other rules
}],
// ...other config
}