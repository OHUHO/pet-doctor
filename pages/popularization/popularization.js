// pages/popularization/popularization.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nvabarData: {
      showCapsule: 1, //是否显示左上角图标   1表示显示    0表示不显示
      title: "推荐", //导航栏 中间的标题
      height: 0
    },
    // 此页面 页面内容距最顶部的距离
    height: app.globalData.height * 2 + 20,

    stickyProps: {
      zIndex: 2,
    },
    menuButtonHeight: 0,
    menuButtonTop: 0,

    isRefresh: false,

    currentTab: 0,
    tabList: [
      {
        name: '推荐'
      },
      {
        name: '文章'
      },
      {
        name: '视频'
      }
    ],

    // 需要传递给 video 组件的数据
    videoList:[
      {
        id:1,
        name: '昵称',
        num: '99',
        title: '测试数据测试测试测试测测试数据测试测试测试测测试数据测试测试测试测测试数据测试测试测试测',
        url: '/images/be/1.jpg',
        avatar: '/images/be/6.jpeg'
      },
      {
        id:2,
        name: '昵称2',
        num: '99',
        title: '测试数据测试测试测试测测试数据测试测试测试测测试数据测试测试测试测测试数据测试测试测试测',
        url: '/images/be/4.png',
        avatar: '/images/be/8.jpeg'
      },
      {
        id:3,
        name: '昵称3',
        num: '99',
        title: '测试数据测试测试测试测测试数据测试测试测试测测试数据测试测试测试测测试数据测试测试测试测',
        url: '/images/be/2.jpg',
        avatar: '/images/be/7.jpeg'
      },
      {
        id:4,
        name: '昵称4',
        num: '99',
        title: '测试数据测试测试测试测测试数据测试测试测试测测试数据测试测试测试测测试数据测试测试测试测',
        url: '/images/be/3.jpg',
        avatar: '/images/be/6.jpeg'
      },
      {
        id:5,
        name: '昵称5',
        num: '99',
        title: '测试数据测试测试测试测测试数据测试测试测试测测试数据测试测试测试测测试数据测试测试测试测',
        url: '/images/be/6.jpeg',
        avatar: '/images/be/grill.jpeg'
      },
      {
        id:6,
        name: '昵称6',
        num: '99',
        title: '测试数据测试测试测试测测试数据测试测试测试测测试数据测试测试测试测测试数据测试测试测试测',
        url: '/images/be/8.jpeg',
        avatar: '/images/be/8.jpeg'
      },
    ]

  },

  // onTabsChange(event) {
  //   console.log(`Change tab, tab-panel value is ${event.detail.value}.`);
  // },

  // onTabsClick(event) {
  //   console.log(`Click tab, tab-panel value is ${event.detail.value}.`);
  // },

  // onStickyScroll(event) {
  //   console.log(event.detail);
  // },


  tabNav(e) {
    let currentTab = e.currentTarget.dataset.index
    this.setData({
      currentTab
    })
  },
  handleSwiper(e) {
    let {current,source} = e.detail
    if (source === 'autoplay' || source === 'touch') {
      const currentTab = current
      this.setData({
        currentTab
      })
    }
  },
  // handleTolower(e){
  //   wx.showToast({
  //     title: '到底啦'
  //   })
  // },
  refresherpulling() {
    // wx.showLoading({
    //   title: '刷新中'
    // })
    setTimeout(() => {
      this.setData({
        isRefresh: false
      })
      // wx.showToast({
      //   title: '加载完成'
      // })
    }, 1500)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const res = wx.getMenuButtonBoundingClientRect()
    this.setData({
      menuButtonHeight: res.height,
      menuButtonTop: res.top
    })

    // console.log(res.width)
    // console.log(res.height)
    // console.log(res.top)
    // console.log(res.right)
    // console.log(res.bottom)
    // console.log(res.left)
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
        selected: 2
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