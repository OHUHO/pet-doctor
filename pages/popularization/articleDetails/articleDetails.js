// pages/popularization/articleDetails/articleDetails.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    article: {
      title: '电子科技大学成都学院这是一个文章的标题，这是标题？',
      imgSrc: 'url',
      username: '用户名',
      portrait: '/images/be/6.jpeg',

      content: '测试数据测试测试测试测测试数据测试测试测试测测试数据测试测试测试测测试数据测试测试测试测测试数据测试测试测试测测试数据测试测试测试测测试数据测试测试测试测测试数据测试测试测试测这些全部是测试数据，这些展示的全部是测试数据测试数据。测试数据测试测试测试测测试数据测试测试测试测测试数据测试测试测试测测试数据测试测试测试测测试数据测试测试测试测测试数据测试测试测试测测试数据测试测试测试测测试数据测试测试测试测这些全部是测试数据，这些展示的全部是测试数据测试数据。测试数据测试测试测试测测试数据测试测试测试测测试数据测试测试测试测测试数据测试测试测试测测试数据测试测试测试测测试数据测试测试测试测测试数据测试测试测试测测试数据测试测试测试测这些全部是测试数据，这些展示的全部是测试数据测试数据。',
      imgSrc: ["/images/cat.png"],
      videoSrc: "/images/cat.png",

      views: 44,
      goods: 120,
      time: "2022-11-06 13:46"

    },

    // 评论数量
    commentNum: 44,
    // 文章的评论信息
    commentList: [
      {
        "num": 44,
        "commentId": 23,
        "messageId": 22,
        "userId": "220118CK3F6DGSCH",
        "username": "用户1",
        "portrait": "/images/be/6.jpeg",
        "creatTime": "2022-03-09 16:06:06",
        "commentDetail": "微信小程序开发，宠物医生主要包含医生和科普两个大的板块。",
        "replyList": [
          {
            "replyId": 34,
            "commentId": 23,
            "userId": "220118CK3F6DGSCH",
            "username": "用户2",
            "portrait": "/images/be/grill.jpeg",
            "toUsername": "用户1",
            "creatTime": "2022-03-09 16:07:07",
            "replyDetail": "冲冲冲！！！"
          },
          {
            "replyId": 40,
            "commentId": 23,
            "userId": "220118CK3F6DGSCH",
            "username": "用户3",
            "portrait": "/images/be/8.jpeg",
            "toUsername": "用户1",
            "creatTime": "2022-11-06 11:06:06",
            "replyDetail": "宠物医生来了"
          }
        ]
      },
      {
        "commentId": 31,
        "messageId": 22,
        "userId": "220118CK3F6DGSCH",
        "username": "用户4",
        "portrait": "/images/be/7.jpeg",
        "creatTime": "2022-11-06 14:00:00",
        "commentDetail": "再来一条评论",
        "replyList": [
          {
            "replyId": 41,
            "commentId": 31,
            "userId": "220118CK3F6DGSCH",
            "username": "用户2",
            "portrait": "/images/be/grill.jpeg",
            "toUsername": "用户4",
            "creatTime": "2022-11-06 14:01:01",
            "replyDetail": "回复一评论"
          }
        ]
      },
      {
        "commentId": 32,
        "messageId": 22,
        "userId": "220118CK3F6DGSCH",
        "username": "用户3",
        "portrait": "/images/be/8.jpeg",
        "creatTime": "2022-11-06 14:01:01",
        "commentDetail": "时间一直倒数着《倒数》—— 邓紫棋",
        "replyList": []
      },
      {
        "commentId": 32,
        "messageId": 22,
        "userId": "220118CK3F6DGSCH",
        "username": "用户3",
        "portrait": "/images/be/8.jpeg",
        "creatTime": "2022-11-06 14:01:01",
        "commentDetail": "再来一条评论",
        "replyList": [
          {
            "replyId": 42,
            "commentId": 32,
            "userId": "220118CK3F6DGSCH",
            "username": "用户1",
            "portrait": "/images/be/6.jpeg",
            "toUsername": "用户3",
            "creatTime": "2022-11-06 14:01:01",
            "replyDetail": "回复00"
          },
          {
            "replyId": 43,
            "commentId": 32,
            "userId": "220118CK3F6DGSCH",
            "username": "用户4",
            "portrait": "/images/be/7.jpeg",
            "toUsername": "用户1",
            "creatTime": "2022-11-06 14:01:01",
            "replyDetail": "回复01"
          }
        ]
      },
    ],

  },










  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // this.setData({
    //   article: options
    // })

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