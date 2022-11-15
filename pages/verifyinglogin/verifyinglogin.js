// pages/verifyinglogin/verifyinglogin.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  
  //微信授权
  bindGetUserInfo(e) {
    if (e.detail.userInfo) { //是否授权
      app.userInfo = e.detail.userInfo
      // 获取code码
      wx.login({
        timeout: 10000,
        success: (res) => {
          this._getSessionKey(res.code)
        }
      });
    } else {
      console.log('用户没有授权')
    }
  },
  // code码换取openid
  _getSessionKey(code) {
    const paramsObj = {
      code: code,
      channel: 1,
      platfrom: 2,
    }
    app.api.login.getSessionKey(paramsObj)
      .then(res => {
        console.log(res)
        if (res.code === 0) {
          const data = res.data
          wx.setStorageSync('openid', data.openid)
          app.common.route.redirectTo({
            url: app.route.login
          })
        }
      })
  },
  // 暂不授权
  onBackBtn() {
    // app.common.route.navigateBack(1)
  },
  
})