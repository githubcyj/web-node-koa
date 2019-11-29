const Router = require('koa-router')
const md5 = require('blueimp-md5')

const ManagerController = require('../controller/managerController')

const router = new Router()

router.post('/user/add', ManagerController.addUser)
      .post('/user/update', ManagerController.updateUser)
      .post('/user/delete', ManagerController.deleteUser)
      .get('/user/list', ManagerController.userList)

module.exports = router.routes()