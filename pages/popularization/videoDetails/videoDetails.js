// pages/popularization/videoDetails/videoDetails.js

import * as event from '../../../utils/event.js'
const Http = require('../../../utils/request.js')
const app = getApp()

Page({
  /**
   * 页面的初始数据
   */
  data: {
    percent: 1,
    current: 0,
    playState: true,
    animationShow: false,
    currentTranslateY: 0,
    // 触摸开始时间
    touchStartTime: 0,
    // 触摸结束时间
    touchEndTime: 0,
    // 最后一次单击事件点击发生时间
    lastTapTime: 0,
    // 单击事件点击后要触发的函数
    lastTapTimeoutFunc: null,
    touchStartingY: 0,
    nowPage: 1,
    pageNo: 1,
    contentId: '',
    likeNum: 0,
    rows: 9,
    commentList: [],
    videos: [
      {
        videoUrl: "https://aweme.snssdk.com/aweme/v1/playwm/?video_id=v0200fce0000bg36q72j2boojh1t030g&line=0",
        durations: 10,
        poster: "/images/be/4.png",
        likenum: 10,
        commnetnum: '20',
        rewardNum: '6'
      },
      {
        videoUrl: "http://video.microc.cn/dG1wL3d4MzkwNjg3YjY3OTZjZTMzYS5vNnpBSnMzYTJqaDJHUWRGVllDV2JhaHhjTUFzLkFaeGE2d1NIVTV3cjkyNGFlOGIyMjMxYTgwNjYyOTVhZjY2YTJjN2VjY2MwLm1wNA==",
        durations: 10,
        poster: "/images/be/6.jpeg",
        likenum: 10,
        commnetnum: '20',
        rewardNum: '6'
      },
      {
        videoUrl: "https://aweme.snssdk.com/aweme/v1/playwm/?video_id=v0300fd10000bfrb9mlpimm72a92fsj0&line=0",
        durations: 10,
        poster: "/images/be/grill.jpeg",
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
    ],
    videoIndex: 0,
    totalCount: '',
    hasmoreData: false,
    loaderMore: true,
    hiddenloading: false,
    inputValue: '',
    addingText: false,
    conid: '',
    lecid: '',
    indexVideo: '',
    rewardNum: '',
    gold: '',
    commnetNum: '',
    nodata: false,
    windowHeight: 0
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    // 滑动
    this.videoChange = throttle(this.touchEndHandler, 200)
    console.log(this.videoChange, 'this.videoChangethis.videoChange')
    // 绑定updateVideoIndex事件，更新当前播放视频index
    event.on('updateVideoIndex', this, function (index) {
      console.log('event updateVideoIndex:', index)
      setTimeout(() => {
        this.setData({
          animationShow: false,
          playState: true
        }, () => {
          // 切换src后，video不能立即播放，settimeout一下
          setTimeout(() => {
            this.vvideo.play()
          }, 100)
        })
      }, 600)
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var that = this
    that.setData({
      windowHeight: wx.getSystemInfoSync().windowHeight
    })
  },
  onReady: function () {
    this.vvideo = wx.createVideoContext("kdvideo", this)
    this.animation = wx.createAnimation({
      duration: 500,// 整个动画过程花费的时间，单位为毫秒
      transformOrigin: '0 0 0'// 动画的类型
    })
    this.toast = this.selectComponent("#toast");
    this.animationTwo = wx.createAnimation({ //评论组件弹出动画
      duration: 400, // 整个动画过程花费的时间，单位为毫秒
      timingFunction: "ease", // 动画的类型
      delay: 0 // 动画延迟参数
    })
  },
  changePlayStatus() {
    console.log('changePlayStatus')
    let playState = !this.data.playState
    if (this.data.animationShow) {

    } else {
      if (playState) {
        this.vvideo.play()
      } else {
        this.vvideo.pause()
      }
      this.setData({
        playState: playState
      })
    }

  },

  touchMove(e) {
    this.videoChange(e)
  },
  touchEndHandler(e) {
    let touchStartingY = this.data.touchStartingY
    console.log(touchStartingY)
    console.log(e.changedTouches[0].clientY)
    let deltaY = e.changedTouches[0].clientY - touchStartingY
    console.log('deltaY ', deltaY)

    let index = this.data.videoIndex
    console.log(index, 'indexindexindexindex')
    if (deltaY > 100 && index !== 0) {
      // 更早地设置 animationShow
      this.setData({
        animationShow: true
      }, () => {
        console.log('-1 切换')
        this.data.commentList = [] //滑动上一个视频清除评论列表
        this.createAnimation(-1, index).then((res) => {
          console.log(res)
          this.setData({
            animation: this.animation.export(),
            videoIndex: res.index,
            currentTranslateY: res.currentTranslateY,
            percent: 1
          }, () => {
            event.emit('updateVideoIndex', res.index)
          })
        })
      })
    } else if (deltaY < -100 && index !== (this.data.videos.length - 1)) {
      this.setData({
        animationShow: true
      }, () => {
        console.log('+1 切换')
        this.createAnimation(1, index).then((res) => {
          this.setData({
            animation: this.animation.export(),
            videoIndex: res.index,
            currentTranslateY: res.currentTranslateY,
            percent: 1
          }, () => {
            event.emit('updateVideoIndex', res.index)
          })
        })
      })
    }
  },

  touchStart(e) {
    let touchStartingY = this.data.touchStartingY
    this.touchStartTime = e.timeStamp
    touchStartingY = e.touches[0].clientY
    console.log(touchStartingY)
    this.setData({
      touchStartingY: touchStartingY
    })
  },
  touchEnd(e) {
    console.log('------touchEnd------')
    console.log(e)
    this.touchEndTime = e.timeStamp
    this.videoChange(e)
  },
  touchCancel(e) {
    console.log('------touchCancel------')
    console.log(e)
  },

  createAnimation(direction, index) {
    // direction为-1，向上滑动，animationImage1为(index)的poster，animationImage2为(index+1)的poster
    // direction为1，向下滑动，animationImage1为(index-1)的poster，animationImage2为(index)的poster
    let videos = this.data.videos
    let currentTranslateY = this.data.currentTranslateY
    console.log('direction ', direction)
    console.log('index ', index)
    // 更新 videoIndex
    index += direction
    currentTranslateY += -direction * this.data.windowHeight
    console.log('currentTranslateY: ', currentTranslateY)
    this.animation.translateY(currentTranslateY).step()

    return Promise.resolve({
      index: index,
      currentTranslateY: currentTranslateY
    })
  },





  /**
   * 点击头像关注
   */
  addLecturerFans: function (e) {
  },
  //粉丝取消关注
  delLecturerFans: function (e) {
  },
  /**
   * 悬赏弹框组件
   */

  onInputCancel: function () {
    // 隐藏弹框
    console.log(55566)
    this.setData({
      addingText: false
    })
  }
})

function throttle(fn, delay) {
  var timer = null;
  return function () {
    var context = this, args = arguments;
    clearTimeout(timer);
    timer = setTimeout(function () {
      fn.apply(context, args);
    }, delay);
  }
}