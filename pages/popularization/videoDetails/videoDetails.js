// pages/popularization/videoDetails/videoDetails.js
Page({

  data: {
    
    /* videos: [
      {
        videoUrl: "https://aweme.snssdk.com/aweme/v1/playwm/?video_id=v0200fce0000bg36q72j2boojh1t030g&line=0",
        durations: 10,
        poster: "/images/be/be/4.png",
        likenum: 10,
        commnetnum: '20',
        rewardNum: '6'
      },
      {
        videoUrl: "http://video.microc.cn/dG1wL3d4MzkwNjg3YjY3OTZjZTMzYS5vNnpBSnMzYTJqaDJHUWRGVllDV2JhaHhjTUFzLkFaeGE2d1NIVTV3cjkyNGFlOGIyMjMxYTgwNjYyOTVhZjY2YTJjN2VjY2MwLm1wNA==",
        durations: 10,
        poster: "/images/be/be/6.jpeg",
        likenum: 10,
        commnetnum: '20',
        rewardNum: '6'
      },
      {
        videoUrl: "https://aweme.snssdk.com/aweme/v1/playwm/?video_id=v0300fd10000bfrb9mlpimm72a92fsj0&line=0",
        durations: 10,
        poster: "/images/be/be/grill.jpeg",
        likenum: 10,
        commnetnum: '20',
        rewardNum: '6'
      },
      {
        videoUrl: "http://video.microc.cn/lecturer_iOS_201903181745504660A5DxJE9a.mp4",
        durations: 10,
        poster: "http://video.microc.cn/lecturer_iOS_201903181745504660A5DxJE9a.mp4?vframe/jpg/offset/0",
        likenum: 10,
        commnetnum: '20',
        rewardNum: '6'
      }
    ], */

    // 视频封面
    poster: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic%2Fcd%2F05%2Fdc%2Fcd05dc90a63739a47d7b301a02205b7e.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1670910759&t=60761c88d0f4240feda3a49a98b1cfe7',
    src: 'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400',
    danmuList: [
      {
        text: '第 1s 出现的弹幕',
        color: '#ff0000',
        time: 1
      },
      {
        text: '第 2s 出现的弹幕',
        color: '#ff00ff',
        time: 2
      },
      {
        text: '第 3s 出现的弹幕',
        color: '#ff00ff',
        time: 3
      },{
        text: '第 4s 出现的弹幕',
        color: '#ff0000',
        time: 4
      },
      {
        text: '第 5s 出现的弹幕',
        color: '#ff00ff',
        time: 5
      },
      {
        text: '第 5s 出现的弹幕',
        color: '#ff00ff',
        time: 5
      },{
        text: '第 5s 出现的弹幕',
        color: '#ff0000',
        time: 5
      },
      {
        text: '第 8s 出现的弹幕',
        color: '#ff00ff',
        time: 8
      },
      {
        text: '第 36s 出现的弹幕',
        color: '#ff00ff',
        time: 36
      }
    ],
    isPlay: false,
    danmuBtn: true,
    lastClickTime: 0,


    tabs: ["简介", "评论"],
    activeIndex: 0,

    videoRecommendList:[
      {
        poster:'/images/be/8.jpeg',
        title:'微信小程序组件',
        author:'用户1',
        viewCounts:18,
        commentCounts:98,
      },
      {
        poster:'/images/be/7.jpeg',
        title:'微信小程序基础容器',
        author:'用户2',
        viewCounts:18,
        commentCounts:98,
      },
      {
        poster:'/images/be/6.jpeg',
        title:'微信小程序框架',
        author:'用户3',
        viewCounts:18,
        commentCounts:98,
      },
      {
        poster:'/images/be/7.jpeg',
        title:'微信小程序API',
        author:'用户4',
        viewCounts:18,
        commentCounts:98,
      }
    ],

    commentNum: 99,
    commentList: [
      {
        "num": 44,
        "commentId": 23,
        "messageId": 22,
        "userId": "220118CK3F6DGSCH",
        "username": "用户1",
        "portrait": "/images/be/6.jpeg",
        "creatTime": "03-09",
        "commentDetail": "微信小程序开发，宠物医生主要包含医生和科普两个大的板块。",
        "replyList": [
          {
            "replyId": 34,
            "commentId": 23,
            "userId": "220118CK3F6DGSCH",
            "username": "用户2",
            "portrait": "/images/be/grill.jpeg",
            "toUsername": "用户1",
            "creatTime": "03-09",
            "replyDetail": "冲冲冲！！！"
          },
          {
            "replyId": 40,
            "commentId": 23,
            "userId": "220118CK3F6DGSCH",
            "username": "用户3",
            "portrait": "/images/be/8.jpeg",
            "toUsername": "用户1",
            "creatTime": "11-06",
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
        "creatTime": "11-06",
        "commentDetail": "再来一条评论",
        "replyList": [
          {
            "replyId": 41,
            "commentId": 31,
            "userId": "220118CK3F6DGSCH",
            "username": "用户2",
            "portrait": "/images/be/grill.jpeg",
            "toUsername": "用户4",
            "creatTime": "11-06",
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
        "creatTime": "11-06",
        "commentDetail": "时间一直倒数着《倒数》—— 邓紫棋",
        "replyList": []
      },
      {
        "commentId": 32,
        "messageId": 22,
        "userId": "220118CK3F6DGSCH",
        "username": "用户3",
        "portrait": "/images/be/8.jpeg",
        "creatTime": "11-06",
        "commentDetail": "再来一条评论",
        "replyList": [
          {
            "replyId": 42,
            "commentId": 32,
            "userId": "220118CK3F6DGSCH",
            "username": "用户1",
            "portrait": "/images/be/6.jpeg",
            "toUsername": "用户3",
            "creatTime": "11-06",
            "replyDetail": "回复00"
          },
          {
            "replyId": 43,
            "commentId": 32,
            "userId": "220118CK3F6DGSCH",
            "username": "用户4",
            "portrait": "/images/be/7.jpeg",
            "toUsername": "用户1",
            "creatTime": "11-06",
            "replyDetail": "回复01"
          }
        ]
      },
    ],

    
  },
  inputValue: '',
  onReady: function (res) {
    this.videoContext = wx.createVideoContext('myVideo')
  },

  
  // 开启/关闭弹幕
  danmuBtn(){
    // 是否展示弹幕，只在初始化时有效，不能动态变更
    // 按钮仅仅第一次点击有效，一旦关闭或开启后就不能操作
    this.setData({
      danmuBtn: !this.danmuBtn
    })
    console.log(this.danmuBtn)
  },
  // 输入弹幕
  bindInputBlur: function (e) {
    this.inputValue = e.detail.value
  },
  // 弹幕
  bindSendDanmu: function () {
    // 发送弹幕
    this.videoContext.sendDanmu({
      text: this.inputValue,
      color: getRandomColor()
    })
    // 保存到数据库中

  },
  // 播放
  bindPlay: function () {
    this.videoContext.play()
    this.setData({
      isPlay: true
    })
  },
  // 暂停
  bindPause: function () {
    this.videoContext.pause()
    this.setData({
      isPlay: false
    })
  },
  // 双击 播放/暂停
  doubleClickPlayAndPause: function (e) {
    var currentClickTime = e.timeStamp
    var lastClickTime = this.data.lastClickTime
    if (lastClickTime != 0) {
      if (currentClickTime - lastClickTime < 350) {
        // console.log("次双击事件")
        var isPlay = this.data.isPlay
        if (isPlay) {
          this.bindPause()
        } else {
          this.bindPlay()
        }
      }
    } else {
      // console.log("单击事件")
    }
    this.setData({
      lastClickTime: currentClickTime
    })
  },
  videoErrorCallback: function (e) {
    console.log('视频错误信息:')
    console.log(e.detail.errMsg)
  },

  tabClick: function (e) {
    var current = e.currentTarget.id;
    this.setData({
      activeIndex: current,
    });
  },
  change: function (e) {
    this.setData({
      activeIndex: e.detail.current,
    })
  },
  
})
function getRandomColor() {
  const rgb = []
  for (let i = 0; i < 3; ++i) {
    let color = Math.floor(Math.random() * 256).toString(16)
    color = color.length == 1 ? '0' + color : color
    rgb.push(color)
  }
  return '#' + rgb.join('')
}