
const md5 = require('blueimp-md5')
const UserModel = require('../modules/UserModule')

var login = async(username, password) => {

    let user = await UserModel.findOne({username, password: md5(password)});
    console.log(user)
    if(user){
        return {status: 0, data: user}
    }else{
        return {status: 1, msg: '用户名或者密码不正确！'}
    }
    // 根据username和password查询数据库users, 如果没有, 返回提示错误的信息, 如果有, 返回登陆成功信息(包含user)
    // await UserModel.findOne({username, password: md5(password)})
    //     .then(user => {
    //         // console.log(user)
    //         if(user){// 登陆成功
    //             // let cook = {
    //             //     domain: 'localhost',  // 写cookie所在的域名
    //             //     path: '/login',       // 写cookie所在的路径
    //             //     maxAge: 10 * 60 * 1000, // cookie有效时长
    //             //     expires: new Date('2019-10-23'),  // cookie失效时间
    //             //     httpOnly: false,  // 是否只用于http请求中获取
    //             //     overwrite: false  // 是否允许重写
    //             //   }
    //             // ctx.cookies.set(
    //             //     'username', 
    //             //     user.username,
    //             //     cook
    //             //   )
    //             // ctx.cookies.set(
    //             //     'password',
    //             //     user.password,
    //             //     cook
    //             // )
    //             ctx.body =  {status: 0, data: user}
    //         }else{// 登陆失败
    //             ctx.body =  {status : 1, msg : '用户名或密码不正确!'}
    //         }
    //     })
    //     .catch(error => {
    //         console.error('登录异常', error)
    //         ctx.body =  {status : 1, msg : '登录异常，请重新尝试'}
    //     })
}

module.exports = {login: login}