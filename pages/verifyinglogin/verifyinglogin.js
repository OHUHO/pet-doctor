// pages/verifyinglogin/verifyinglogin.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:{},
  },
  // 授权登录
  getUserProfile(e) {
    // 推荐使用 wx.getUserProfile 获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认
    // 开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '用于完善你的个人资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        // 登录并将数据传递给服务器
        wx.login({
          success (res) {
            console.log(res.code)
            if (res.code) {
              //发起网络请求通过code 获取 openid
              wx.request({
                url: app.serverUrl+"/login",
                data: {
                  code: res.code
                },
                method:'POST',
                success(res){
                  // 将用户信息保存至服务器

                }
              })
            } else {
              console.log('登录失败！' + res.errMsg)
            }
          }
        })
      }
    })
  },
  // 暂不授权
  onBackBtn() {
    // app.common.route.navigateBack(1)
    wx.navigateBack({
      delta: 1,
    })
  },
  
})