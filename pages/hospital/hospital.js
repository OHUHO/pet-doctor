// pages/hospital/hospital.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShowInput: false, //控制输入栏

  },

  //点击出现输入框
  showInput: function () {
    this.setData({
      isShowInput: true
    })
    console.error('show+++++++++++')
  },

  //隐藏输入框
  onHideInput: function () {
    this.setData({
      showInput: false
    })
    console.error('hide+++++++++++')
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    wx.showNavigationBarLoading()
    setTimeout(() => {
      wx.hideNavigationBarLoading()
    }, 1000)
    //自定义的tabbar
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        selected: 1
      })
    }
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})