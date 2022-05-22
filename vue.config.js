module.exports = {
  publicPath: './',
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          /* less 变量覆盖，用于自定义 ant design 主题 */
          "primary-color": "#02458b",
          "link-color": "#0161b7",
          "border-radius-base": "4px"
        },
        javascriptEnabled: true
      }
    }
  },
  configureWebpack (config) {
    config.externals = {
      'AMap': 'AMap' // 高德地图配置
    }
  }
};
