// pages/publish/publish.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show: true,//显示选择图片的按钮
    imgList: [
      'https://i.postimg.cc/Bn1XpkSn/susu.jpg', 'https://i.postimg.cc/Gm7KjGmN/111.jpg', 'https://i.postimg.cc/Bv28vfkg/222.webp',
      'https://i.postimg.cc/65STLQNc/333.webp', 'https://i.postimg.cc/Bn1XpkSn/susu.jpg', 'https://i.postimg.cc/Bn1XpkSn/susu.jpg',
      'https://i.postimg.cc/Bn1XpkSn/susu.jpg',
    ],
    maxPhoto: 9,//最大上传9张图片
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
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        selected: 2
      })
    }
  },


  /**
   * 选择上传方式
   * @param {*} e 
   */
  chooseImg(e) {
    if (this.NextTap) {
      return;
    }
    this.NextTap = true;
    setTimeout(() => {
      this.NextTap = false;
    }, 1500)//1.5秒之后可以再次点击，防止用户重复点击
    wx.showActionSheet({
      itemList: ['从相册中选择', '拍照'],
      success: (res) => {
        if (!res.cancel) {
          if (res.tapIndex == 0) {
            this.chooseWxImage('album')//相册
          } else if (res.tapIndex == 1) {
            this.chooseWxImage('camera')//拍照
          }
        }
      }
    })
  },
  /**
   * 上传照片
   * @param {*} type 
   */
  chooseWxImage: function (type) {
    let { imgList, maxPhoto } = this.data
    if (imgList.length > 9) {
      wx.showToast({
        title: '最多上传9张',
        icon: 'none',
        duration: 2000
      })
      return
    }
    wx.chooseImage({
      count: maxPhoto - imgList.length,
      sizeType: ['original', 'compressed'],
      sourceType: [type],
      success: (res) => {
        console.log(res)
        let tempFilePaths = res.tempFilePaths //成功后返回的的路径
        console.log(tempFilePaths)
        tempFilePaths.forEach(item => {
          // fileUpload.upload('/common/upload-img', item).then(res => {
          //   if (res.code == 10000 && imgList.length < 10) {
          //     imgList.push(res.data)
          //     this.setData({
          //       imgList,
          //       show: imgList.length >= 10 ? false : true
          //     })
          //   }
          // })
          imgList.push(item)
        })
        this.setData({
          imgList: imgList,
          show: imgList.length >= 9 ? false : true
        })
      }
    })
  },
  /*
    * 图片预览
    * @param e
    */
  previewImg(e) {
    let currentUrl = e.currentTarget.dataset.src;
    let urls = this.data.imgList
    wx.previewImage({
      current: currentUrl, // 当前显示图片的http链接
      urls: urls// 需要预览的图片http链接列表
    })
  },
  /**
   * 删除上传的图片
   * @param e
   */
  deleteUpload(e) {
    let { index } = e.currentTarget.dataset, { imgList } = this.data
    imgList.splice(index, 1)
    this.setData({
      imgList: imgList,
      show: imgList.length >= 9 ? false : true
    })
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