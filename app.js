// app.js
App({

  globalData:{
    height: 0,
    
  },
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })

    //自定义顶部搜索必须设置
    // 启动应用时获取height
    wx.getSystemInfo({
      success: (res) => {
        this.globalData.height = res.statusBarHeight
      }
    })

    // 自定义头部
    // let menuButtonObject = wx.getMenuButtonBoundingClientRect();
    // wx.getSystemInfo({
    //   success: res => {
    //     //导航高度
    //     let statusBarHeight = res.statusBarHeight,
    //       navTop = menuButtonObject.top,
    //       navObjWid = res.windowWidth - menuButtonObject.right + menuButtonObject.width, // 胶囊按钮与右侧的距离 = windowWidth - right+胶囊宽度
    //       navHeight = statusBarHeight + menuButtonObject.height + (menuButtonObject.top - statusBarHeight) * 2;
    //     this.globalData.navHeight = navHeight; //导航栏总体高度
    //     this.globalData.navTop = navTop; //胶囊距离顶部距离
    //     this.globalData.navObj = menuButtonObject.height; //胶囊高度
    //     this.globalData.navObjWid = navObjWid; //胶囊宽度(包括右边距离)
    //     this.globalData.windowHeight = res.windowHeight;
    //     this.globalData.windowWidth = res.windowWidth;
    //     // console.log(navHeight,navTop,menuButtonObject.height,navObjWid)
    //   },
    //   fail(err) {
    //     console.log(err);
    //   }
    // })
  },
  globalData: {
    userInfo: null
  }
})
