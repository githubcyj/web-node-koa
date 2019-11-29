const Router = require('koa-router')

const LoginController = require('../controller/loginController')

const router = new Router()

router.post('/', LoginController.getUserInfo)

module.exports = router.routes()