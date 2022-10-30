// custom-tab-bar/index.js
Component({
  data: {
    color: "#F9A7A7",
    selectedColor: "#226967",
    backgroundColor: "#ffffff",
    list: [
      {
        pagePath: "/pages/index/index",
        text: "首页",
        iconPath: "/images/tabbar/index.png",
        selectedIconPath: "/images/tabbar/index-selected.png"
      },
      {
        pagePath: "/pages/hospital/hospital",
        text: "医院",
        iconPath: "/images/tabbar/hospital.png",
        selectedIconPath: "/images/tabbar/hospital-selected.png"
      },
      {
        pagePath: "/pages/publish/publish",
        bulge:true,
        text: "发布",
        iconPath: "/images/tabbar/publish.png",
        selectedIconPath: "/images/tabbar/publish-selected.png"
      },
      {
        pagePath: "/pages/popularization/popularization",
        text: "科普",
        iconPath: "/images/tabbar/popularization.png",
        selectedIconPath: "/images/tabbar/popularization-selected.png"
      },
      {
        pagePath: "/pages/me/me",
        text: "我的",
        iconPath: "/images/tabbar/me.png",
        selectedIconPath: "/images/tabbar/me-selected.png"
      },
    ]
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({url}) 
    }
  }
})
