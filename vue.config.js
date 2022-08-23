const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
    proxy:{
      '/api': {
        target: 'http://localhost:9090', // 目标服务器 代理的地址
        changeOrigin: true, // 允许跨域
        secure: true, // 支持https
        pathRewrite: { '^/api': '/' } // 相当于用'/api'代替target里面的地址，调接口时用/api代替
      },
    },
    port:"3001",
  }
})
