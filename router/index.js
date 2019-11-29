
const Router = require("koa-router")

// 得到路由器对象
var router = new Router()
// console.log('router', router)

const login = require('./login')
const manage = require('./manage')


router.use('/api/login', login)
router.use('/api/manager', manage)

// router.post('/login', async (ctx) => {
//   ctx.body = {status: 0, data: ctx.request.body}
//   console.log({status: 0, data: ctx.request.body})
// })

// 登陆
// router.post('/login', async(ctx, res) => {
//     console.log(ctx.request)
//     console.log(ctx.response)
    // const {username, password} = ctx.request.body
    // // 根据username和password查询数据库users, 如果没有, 返回提示错误的信息, 如果有, 返回登陆成功信息(包含user)
    // UserModel.findOne({username, password: md5(password)})
    //   .then(user => {
    //     if (user) { // 登陆成功
    //       // 生成一个cookie(userid: user._id), 并交给浏览器保存
    //       res.cookie('userid', user._id, {maxAge: 1000 * 60 * 60 * 24})
    //       if (user.role_id) {
    //         RoleModel.findOne({_id: user.role_id})
    //           .then(role => {
    //             user._doc.role = role
    //             console.log('role user', user)
    //             res.send({status: 0, data: user})
    //           })
    //       } else {
    //         user._doc.role = {menus: []}
    //         // 返回登陆成功信息(包含user)
    //         res.send({status: 0, data: user})
    //       }
  
    //     } else {// 登陆失败
    //       res.send({status: 1, msg: '用户名或密码不正确!'})
    //     }
    //   })
    //   .catch(error => {
    //     console.error('登陆异常', error)
    //     res.send({status: 1, msg: '登陆异常, 请重新尝试'})
    //   })
  // })




  module.exports = router


// const fs = require('fs');


// router.get('/index', async (ctx, next) => {
//   ctx.type = 'text/html';
//   ctx.body = fs.createReadStream('./views/index.html');
// });

// module.exports = router