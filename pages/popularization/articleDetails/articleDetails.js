// pages/popularization/articleDetails/articleDetails.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    article: {
      title: '这是一个标题',
      imgSrc:'url',
      username: '用户名',
      portrait:'/images/be/6.jpeg',

      content:'测试数据测试测试测试测测试数据测试测试测试测测试数据测试测试测试测测试数据测试测试测试测测试数据测试测试测试测测试数据测试测试测试测测试数据测试测试测试测测试数据测试测试测试测',
      imgSrc:["/images/cat.png"],
      videoSrc:"/images/cat.png",
      
      views:44,
      goods:120,

    },
    temp:{
      "id":22,
      "messageId":null,
      "userId":"220118CK3F6DGSCH",
      "portrait":"https://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83eo0JnOqicrn63GG2AQAOTsuFRjV1ibnIlhBjnsYrHcHwfqoicm5PiaON6nEDUwL4R7xT3uY2c9TnhZDSA/132",
      "username":"Aubuary",
      "title":"电子科技大学成都学院",
      "labelList":"[\"重金酬谢\",\"免费问答\",\"在线答疑\"]",
      "school":"电子科技大学成都学院",
      "major":"软件工程",
      "isGiveMoney":true,
      "money":66,
      "createTime":"2022-03-09 16:03:03",
      "contents":"电子科技大学成都学院计算机学院/商学院联合开发的微信小程序即将上线！！"
  },

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      article: options
    })
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

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