const ManagerService = require('../service/managerService')

const addUser = async (ctx) => {//添加用户
    // 读取请求参数数据
    const {username, password} = ctx.request.body
    let add_user = await ManagerService.addServer(username, password)
    ctx.body = add_user.data
  }

const updateUser = async (ctx) => {//更新用户
    const user = ctx.request.body
    let update_user = await ManagerService.updateServer(user)
    ctx.body = update_user.data
}

const deleteUser = async(ctx) => {
    let delete_user = await ManagerService.deleteServer(ctx)
    ctx.body = delete_user
}

const userList = async(ctx) => {
    let list = await ManagerService.listServer(ctx)
    ctx.body = list
}

const listCategory = async(ctx) => {
    const { parentId } = ctx.request.body
    let list_category = await ManagerService.list_Category(parentId)
    console.log(list_category)
    ctx.body = list_category
}

const addCategory = async(ctx) => {
    const { parentId, categoryName } = ctx.request.body
    let add_category = await ManagerService.add_Category(parentId, categoryName)
    console.log(add_category)
    ctx.body = add_category
}
module.exports = {
    addUser : addUser,
    updateUser : updateUser,
    deleteUser : deleteUser,
    userList : userList,
    listCategory : listCategory,
    addCategory : addCategory
}