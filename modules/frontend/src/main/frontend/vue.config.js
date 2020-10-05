const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

// vue.config.js
module.exports = {
  chainWebpack: config => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
        options.transformAssetUrls = {
          img: 'src',
          image: 'xlink:href',
          'b-avatar': 'src',
          'b-img': 'src',
          'b-img-lazy': ['src', 'blank-src'],
          'b-card': 'img-src',
          'b-card-img': 'src',
          'b-card-img-lazy': ['src', 'blank-src'],
          'b-carousel-slide': 'img-src',
          'b-embed': 'src'
        }

        return options
      })
  },
  devServer: {
    port: 3000,
    contentBase: [__dirname + '/public', __dirname + '/assets']
  },
  configureWebpack: {
    devtool: 'source-map'
   ,plugins: [
      // Copy over media resources from the Blockly package
      new CopyPlugin([
        {
          from: path.resolve(__dirname, './node_modules/blockly/media'),
          to: path.resolve(__dirname, 'dist/media')
        }
      ])
    ]
  }
}