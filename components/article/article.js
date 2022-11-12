// components/recommend/recommend.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    articleList:{
      type:null,
      value:[],
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
    tranArticleDetails(event){
      // 获取wxml页面传递过来的值
      const article = event.currentTarget.dataset.article
      // 跳转页面时将值传递到新的页面
      wx.navigateTo({
        url: "/pages/popularization/articleDetails/articleDetails?article="+JSON.stringify(article),
      })
    }

  }
})
