const Koa = require('koa')
const mongoose = require('mongoose')
const bodyParser = require('koa-bodyparser')
const jsonp = require('koa-jsonp')

const Router = require('./router/index')
const config = require('./config')

const app = new Koa()

// 配置ctx.body解析中间件
app.use(bodyParser())

// 使用中间件
app.use(jsonp())

app.use(Router.routes())
    .use(Router.allowedMethods())

// app.use(async ctx => {
//   ctx.body = 'Hello World'
// })

// server.use(async (ctx, next) => {
//   if(ctx.request.path == '/index'){
//     ctx.type = 'text/html'
//     ctx.body = fs.createReadStream('./views/index.html')
//   }else{
//     await next()
//   }
// })

// 声明使用解析cookie数据的中间件
// const cookieParser = require('cookie-parser')
// app.use(cookieParser())
// 声明使用路由器中间件

// app.use('/', indexRouter)  //


// 通过mongoose连接数据库
mongoose.connect('mongodb://localhost/reactDemo', {useNewUrlParser: true})
  .then(() => {
                console.log('连接数据库成功!!!')
                // 只有当连接上数据库后才去启动服务器
                app.listen('5000', () => {
                  console.log('服务器启动成功, 请访问: http://localhost:5000')
                })
              })
  .catch(error => {
                    console.error('连接数据库失败', error)
                  })
