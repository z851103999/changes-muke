Component({
  options: {
    multipleSlots: true, //组件定义时的选项中启用slot支持
  },
  externalClasses: ["tag-class"], //外部样式
  behaviors: [],
  properties: {
    text:String
  },
  data: {},
  lifetimes: {
    created() {},
    attached() {},
    moved() {},
    detached() {},
  },
  methods: {
    // 自定义事件
    onTap: function () {
      this.triggerEvent("tapping", {
        text: this.properties.text,
      });
    },
  },
});
