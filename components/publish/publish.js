// components/publish/publish.js
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

		hideModal: true, //模态框的状态  true-隐藏  false-显示
		animationData: {},//

		show: true,//显示选择图片的按钮
		imgList: [
			// 'https://i.postimg.cc/Bn1XpkSn/susu.jpg', 'https://i.postimg.cc/Gm7KjGmN/111.jpg', 'https://i.postimg.cc/Bv28vfkg/222.webp',
			// 'https://i.postimg.cc/65STLQNc/333.webp', 
		],
		maxPhoto: 9,//最大上传9张图片，
	},

	/**
	 * 组件的方法列表
	 */
	methods: {

		// ---------------------------------------------------------------------------
		// 显示遮罩层
		showModal: function () {
			var that = this;
			that.setData({
				hideModal: false
			})
			var animation = wx.createAnimation({
				duration: 300,//动画的持续时间 默认400ms   数值越大，动画越慢   数值越小，动画越快
				timingFunction: 'ease',//动画的效果 默认值是linear
			})
			this.animation = animation
			setTimeout(function () {
				that.fadeIn();//调用显示动画
			}, 200)

			// 隐藏 tabBar
			this.getTabBar().setData({
				show: false
			})
		},

		// 隐藏遮罩层
		hideModal: function () {
			var that = this;
			var animation = wx.createAnimation({
				duration: 300,//动画的持续时间 默认400ms   数值越大，动画越慢   数值越小，动画越快
				timingFunction: 'ease',//动画的效果 默认值是linear
			})
			this.animation = animation
			that.fadeDown();//调用隐藏动画   
			setTimeout(function () {
				that.setData({
					hideModal: true
				})
			}, 720)//先执行下滑动画，再隐藏模块
			
			// 显示 tabBar
			this.getTabBar().setData({
				show: true
			})
		},

		//动画集
		fadeIn: function () {
			this.animation.translateY(0).step()
			this.setData({
				animationData: this.animation.export()//动画实例的export方法导出动画数据传递给组件的animation属性
			})
		},
		fadeDown: function () {
			this.animation.translateY(300).step()
			this.setData({
				animationData: this.animation.export(),
			})
		},

		// ---------------------------------------------------------------------------
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
	}
})
