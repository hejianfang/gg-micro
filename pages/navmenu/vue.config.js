const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}
const { name } = require('./package')
const dev = process.env.NODE_ENV === 'development'
module.exports = {
  publicPath: dev ? '//localhost:8081' : '/',
  outputDir: 'dist',
  assetsDir: 'static',
  filenameHashing: true,
  devServer: {
    hot: true,
    disableHostCheck: true,
    port: 8081,
    overlay: {
      warnings: false,
      errors: true
    },
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "../../gg-config/css/mixin.scss";'
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src')
      }
    },
    output: {
      // 把子应用打包成 umd 库格式
      library: `${name}-[name]`,
      libraryTarget: 'umd',
      jsonpFunction: `webpackJsonp_${name}`
    }
  }
}
