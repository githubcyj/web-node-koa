
const LoginService = require('../service/loginService')

var getUserInfo = async(ctx) => {
    const {username, password} = ctx.request.body
    let loginData = await LoginService.login(username, password)
    ctx.body = loginData
}

module.exports = {getUserInfo: getUserInfo}