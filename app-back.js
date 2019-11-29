//第一种作为服务器的方式
const Koa = require('koa')

const app = new Koa()

app.use(async ctx => {
  ctx.body = 'Hello World'
})

// 通过mongoose连接数据库
mongoose.connect('mongodb://localhost/server_db2', {useNewUrlParser: true})
  .then(() => {
                console.log('连接数据库成功!!!')
                // 只有当连接上数据库后才去启动服务器
                //绑定端口号，启动服务器
                app.listen(3000, function () {
                    console.log('服务器启动成功，请求访问 http://127.0.0.1:3000/')
                })
            })
  .catch(error => {
                    console.error('连接数据库失败', error)
                })


//第二种
// var http = require('http');

// // http.createServer(function (request, response) {

// //     // 发送 HTTP 头部 
// //     // HTTP 状态值: 200 : OK
// //     // 内容类型: text/plain
// //     response.writeHead(200, {'Content-Type': 'text/plain'});

// //     // 发送响应数据 "Hello World"
// //     response.end('Hello World\n');
// // }).listen(8888);

// // // 终端打印如下信息
// // console.log('Server running at http://127.0.0.1:8888/');

//第三种
// var server = http.createServer()

// // 3. 服务器要干嘛？
// //    提供服务：对 数据的服务
// //    发请求
// //    接收请求
// //    处理请求
// //    给个反馈（发送响应）
// //    注册 request 请求事件
// //    当客户端请求过来，就会自动触发服务器的 request 请求事件，然后执行第二个参数：回调处理函数
// server.on('request', function (err,res) {
//   res.end('Hello Node.js!')
// })