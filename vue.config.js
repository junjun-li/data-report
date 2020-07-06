module.exports = {
  // lintOnSave: false,
  productionSourceMap: false,
  devServer: {
    // 自动开启浏览器
    open: true,
    // 一切服务都启用gzip 压缩：
    compress: true,
    // 热模块替换
    hot: true,
    port: 12865,
    // 将运行进度输出到控制台。
    progress: true
    // proxy: {
    //   '/sns': {
    //     target: `https://api.weixin.qq.com`,
    //     changeOrigin: true,
    //     // pathRewrite: {
    //     //   '^/sns': '',
    //     // },
    //   },
    // },
  },
  configureWebpack: {
    // 解决debugger显示位置不准确的问题
    devtool: 'source-map'
  }
}
