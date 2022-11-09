// components/video/video.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    videoList:{
      type: null,
      value: [],
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    
  },

  /**
   * 组件的方法列表
   */
  methods: {

    videoDetails(e){
      const videoId = e.currentTarget.dataset.id
      console.log(videoId)
      wx.navigateTo({
        url: "/pages/popularization/videoDetails/videoDetails?videoId="+videoId,
      })
    }

  }
})
