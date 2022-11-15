class Common{
  // 验证登录
  verifyingLogin(callback){
    const userinfo = wx.getStorageSync('userinfo')
    if (userinfo == ''){
      wx.navigateTo({
        url: '/pages/verifyinglogin/verifyinglogin',
      })
    }else{
      callback()
    }
  }

  // 获取用户信息
  getUserinfo(){
    return wx.getStorageSync('userinfo')
  }
}
export {Common}
