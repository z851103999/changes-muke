// components/navi/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title:String,
    // 用来指明期刊是否为第一期
    first:Boolean,
    // 用来指明期刊是否为最后一期
    latest:Boolean
  },

  /**
   * 组件的初始数据
   */
  data: {
    disLeftSrc: 'images/triangle.dis@left.png',
    leftSrc: 'images/triangle@left.png',
    disRightSrc: 'images/triangle.dis@right.png',
    rightSrc: 'images/triangle@right.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    /**
     * 如果不是最后一期才能出发
     * @param {*} event 
     */
    onLeft: function (event) {
      if (!this.properties.latest) {
        //自定义事件(让父级组件可以回调)
        this.triggerEvent('left', {}, {})
      }
    },
    onRight:function(event){
      if(!this.properties.first){
        this.triggerEvent('right',{},{})
      }
    }
  }
})
