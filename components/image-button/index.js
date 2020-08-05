// components/image-button/index.js
Component({
  options: {
    multipleSlots: true
  },
  /**
   * 组件的属性列表
   */
  properties: {
    //getUserInfo获取用户信息 share分享
    openType: {
      type: String
    },
    imageSrc: {
      type: String
    },
    bindgetuserinfo: {
      type: String
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
    // 获取用户信息
    onGetUserInfo(event) {
      // console.log(event)
      this.triggerEvent('getuserinfo', event.detail, {})
    }
  }
})