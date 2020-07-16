/**
 * @description:组件通用代码
 * @params img 图片
 * @params content 内容
 * @params hidden 控制组件内部隐藏
 */
const classicBeh = Behavior({
  properties: {
    img: String,
    content: String,
    hidden: Boolean,
  },
  lifetimes: function () {
    attached: {

    }
  },
  data: {

  },
  methods: {

  }
})

export { classicBeh }
