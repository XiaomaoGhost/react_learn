/**
 * 作者：Mr.wang
 * 时间：2022/4/11
 * 文件名：setupProxy
 * 项目名称：脚手架
 * WebStorm
 */
/**
 * 作者：Mr.wang
 * 时间：2022/4/11
 * 文件名：setupProxy
 * 项目名称：脚手架
 * WebStorm
 */
const {createProxyMiddleware} = require('http-proxy-middleware')

module.exports = function(app){
    app.use(
        createProxyMiddleware('/api2',{//原件/api1前缀的请求，就会触发该dialing
            target:"http://localhost:5001",//请求转发给谁
            changeOrigin:true,//控制服务器收到的请求头中的HOST值
            pathRewrite:{'^/api2':''}//重写请求路径
        }),
        createProxyMiddleware('/api1',{
            target:"http://localhost:5000",
            changeOrigin:true,
            pathRewrite:{'^/api1':''}
        })

    )
}