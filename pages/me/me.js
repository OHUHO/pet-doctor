// pages/me/me.js
import {Common} from '../../api/common'
const common = new Common()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    // hasUserInfo: false,
    // canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName'), // 如需尝试获取用户信息可改为false
    userData:[
      ["获赞",944],
      ["收藏",944],
      ["关注",944],
    ],
    petList:[
      {img:'/images/pets/3.png',name:'南瓜',info1:'波斯猫',info2:'已绝育',info3:'相伴520天',},
      {img:'/images/pets/2.png',name:'泡芙',info1:'波斯猫',info2:'已绝育',info3:'相伴520天',},
		],
		myManageList:[
      {"icon":"icon-xiedaichongwu","title":'我的宠物'},
      {"icon":"icon-jilu","title":'我的问诊'},
      {"icon":"icon-shoucang1","title":'我的收藏'},
      {"icon":"icon-fabujishu","title":'我的发布'},
    ],
    appManageList:[
      {"icon":"icon-shezhi","title":'账号设置'},
      {"icon":"icon-lianxikefu","title":'联系客服'},
    ]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // if (wx.getUserProfile) {
    //   this.setData({
    //     canIUseGetUserProfile: true
    //   })
    // }
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile ({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
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
  onShow: function () {
    wx.showNavigationBarLoading()
    setTimeout(() => {
      wx.hideNavigationBarLoading()
    }, 1000)
    //自定义的tabbar
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        selected: 3
      })
		}
		
		// 判断用户是否登录
		this.isLogin()
	},
	
	isLogin(){
		const userInfo = this.data.userInfo
		if(!userInfo.username){
			this.setData({
				userInfo: common.getUserinfo(),
			})
		}
    
	},

  onLogin(){
    common.verifyingLogin(() => {
      this.setData({
        userInfo: common.getUserinfo()
      })
    })
  },
  
})