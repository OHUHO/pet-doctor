// app.js
App({
  serverUrl:'http://localhost:8888',
  onLaunch() {
    // 启动应用时获取height
    wx.getSystemInfo({
      success: (res) => {
        this.globalData.height = res.statusBarHeight
      }
    })
    

    const that = this;
    // 获取系统信息
    const systemInfo = wx.getSystemInfoSync();
    // console.log(systemInfo)
    // 胶囊按钮位置信息
    const menuButtonInfo = wx.getMenuButtonBoundingClientRect();
    // console.log(menuButtonInfo)
    // 导航栏高度 = 状态栏到胶囊的间距（胶囊距上距离-状态栏高度） * 2 + 胶囊高度 + 状态栏高度
    that.globalData.navBarHeight = (menuButtonInfo.top - systemInfo.statusBarHeight) * 2 + menuButtonInfo.height;
    that.globalData.statusBarHeight = systemInfo.statusBarHeight;
    that.globalData.menuRight = systemInfo.screenWidth - menuButtonInfo.right;
    that.globalData.menuBotton = menuButtonInfo.top - systemInfo.statusBarHeight;
    that.globalData.menuHeight = menuButtonInfo.height;
    that.globalData.menuWidth = menuButtonInfo.width;
    that.globalData.windowWidth = systemInfo.windowWidth;
  },

  globalData: {
    userInfo: null,
    height: 0,
    navBarHeight: 0, // 导航栏高度
    statusBarHeight: 0, // 状态栏高度
    menuRight: 0, // 胶囊距右方间距（方保持左、右间距一致）
    menuBotton: 0, // 胶囊距底部间距（保持底部间距一致）
    menuHeight: 0, // 胶囊高度（自定义内容可与胶囊高度保证一致）
    menuWidth: 0, // 胶囊宽度（自定义内容可与胶囊宽度保证一致）
    windowWidth: 0, // 页面宽度

  }
})
