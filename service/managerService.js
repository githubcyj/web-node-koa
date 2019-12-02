const UserModel = require('../modules/UserModule')
const md5 = require('blueimp-md5')

const addServer = async(username, password) => {

    // 处理: 判断用户是否已经存在, 如果存在, 返回提示错误的信息, 如果不存在, 保存
    // 查询(根据username)
    let add_user = await UserModel.findOne({username})
    if(add_user){
        return {status : 1, data : '此账号已经存在，请直接登录！'}
    }else{
        // 保存
        let create_user =  await UserModel.create({username, password: md5(password || 'atguigu')})
        if(create_user){
            // 返回包含user的json数据
            return {status: 0, data: create_user}
        }else{
            return {status: 1, msg: '添加用户异常, 请重新尝试'}
        }
    }
}

const updateServer = async(user) => {
    let update_user = await UserModel.findOneAndUpdate({_id: user._id}, user)
    if(update_user){
        const data = Object.assign(update_user, user)
        return {status: 0, data}
    }else{
        return {status: 1, msg: '更新用户异常, 请重新尝试'}
    }
}

const deleteServer = async(ctx) => {//删除用户
    const {userId} = ctx.request.body
    let delete_user = await UserModel.deleteOne({_id: userId})
    if(delete_user.deletedCount > 0){
        return {status : 0}
    }else{
        return {status : 0, msg : '账号删除失败！'}
    }
}

const listServer = async(ctx) => {
    const user_list = await UserModel.find({username: {'$ne': 'admin'}})
    if(user_list){
        // RoleModel.find().then(roles => {
        //     res.send({status: 0, data: {users, roles}})
        // })
        return {status: 0, data: {user_list}}
    }else{
        return {status: 1, msg: '获取用户列表异常, 请重新尝试'}
    }
}

const list_Category = async(ctx) => {
    const category_list = await CategoryModel.find({parentId})
    if(category_list){
        return {status: 0, data: category_list}
    }else{
        console.error('获取分类列表异常', error)
        return {status: 1, msg: '获取分类列表异常, 请重新尝试'}
    }
}

const add_Category = async(ctx) => {
    const category = await CategoryModel.create({name: categoryName, parentId: parentId || '0'})
    if(category){
        return {status: 0, data: category}
    }else{
        console.error('添加分类异常', error)
        return {status: 1, msg: '添加分类异常, 请重新尝试'}
    }
}

module.exports = {
    addServer : addServer,
    updateServer : updateServer,
    deleteServer : deleteServer,
    listServer : listServer,
    list_Category : list_Category,
    add_Category : add_Category
}