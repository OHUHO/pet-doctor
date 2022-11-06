// components/recommend/recommend.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    dataList:[
      {
        title: '这是一个标题',
        imgSrc:'url',
        username: '用户名',
        
        content:'测试数据测试测试测试测测试数据测试测试测试测测试数据测试测试测试测测试数据测试测试测试测测试数据测试测试测试测测试数据测试测试测试测测试数据测试测试测试测测试数据测试测试测试测',
        imgSrc:["/images/cat.png"],
        videoSrc:"/images/cat.png",
        
        views:44,
        goods:120,
  
      },
      {
        title: '这是一个标题',
        imgSrc:'url',
        username: '用户名',
        
        content:'测试数据测试测试测试测测试数据测试测试测试测测试数据测试测试测试测测试数据测试测试测试测测试数据测试测试测试测测试数据测试测试测试测测试数据测试测试测试测测试数据测试测试测试测',
        imgSrc:["/images/pets/1.png","/images/pets/2.png","/images/pets/3.png"],
        videoSrc:"/images/cat.png",
        
        views:44,
        goods:120,
  
      },
      {
        title: '这是一个标题',
        imgSrc:'url',
        username: '用户名',
        
        content:'测试数据测试测试测试测测试数据测试测试测试测测试数据测试测试测试测测试数据测试测试测试测测试数据测试测试测试测测试数据测试测试测试测测试数据测试测试测试测测试数据测试测试测试测',
        imgSrc:[],
        videoSrc:"/images/cat.png",
        
        views:44,
        goods:120,
  
      },
      {
        title: '这是一个标题',
        imgSrc:'url',
        username: '用户名',
        
        content:'测试数据测试测试测试测测试数据测试测试测试测测试数据测试测试测试测测试数据测试测试测试测测试数据测试测试测试测测试数据测试测试测试测测试数据测试测试测试测测试数据测试测试测试测',
        imgSrc:["/images/pets/2.png"],
        videoSrc:"/images/cat.png",
        
        views:44,
        goods:120,
  
      },
    ],
    
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
