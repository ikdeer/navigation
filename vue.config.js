const path = require("path");
const publicPath = process.env.NODE_ENV === "production" ? "/" : "/";
const CompressionWebpackPlugin = require("compression-webpack-plugin");
const merge = require('webpack-merge') // 用于做相应的 merge 处理
const resolve = dir => path.join(__dirname, dir)

module.exports = {
  publicPath: publicPath,
  outputDir: "dist", // 输出目录
  assetsDir: "static", // 放置生成的静态资源目录
  lintOnSave: true, // 是否启用 eslint
  productionSourceMap: true, // 生产环境是否启用 sourceMap
  chainWebpack: config => {
    // 移除 prefetch 插件
    config.plugins.delete("prefetch");
    // 限制 url-loader 大小
    config.module
      .rule("images")
      .use("url-loader")
      .tap(options =>
        merge(options, {
          limit: 5120
        })
      );
    // alias 设置
    config.resolve.alias.set("_img", resolve("src/assets"));

    // 关闭包大小警告提示
    config.performance.set("hints", false);
  },
  configureWebpack: config => {
    if (process.env.NODE_ENV === "production") {
      return {
        plugins: [
          // 开启 Gzip 压缩
          new CompressionWebpackPlugin({
            filename: "[path].gz[query]",
            algorithm: "gzip",
            test: new RegExp("\\.(js|css)$"),
            threshold: 10240,
            minRatio: 0.8
          })
        ]
      };
    }
  },
  devServer: {
    open: true, // 是否自动打开浏览器页面
    host: "0.0.0.0", // 指定使用一个 host。默认是 localhost
    port: 8088, // 端口号
    progress: true,
    // string | Object 代理设置
    proxy: {
      '/MARQUEE_URL': {
        target: "https://api.abcyun.co/api/tool/yiyan/token/5ea136920e1fa",
        changeOrigin: true,
        pathRewrite: {
          '^/MARQUEE_URL': ''
        }
      },
    }
  }
};
