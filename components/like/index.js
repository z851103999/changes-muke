// components/like/index.js
Component({
	/**
	 * 组件的属性列表
	 */
	properties: {
		like: { //必填
			type: Boolean,
		},
		count: { //点击数
			type: Number,
		},
		readOnly: { //只读属性:如果为true不能点击
			type: Boolean,
		},
	},

	/**
	 * 组件的初始数据
	 */
	data: {
		like: false,
		count: 0,
		yesSrc: "images/like.png",
		noSrc: "images/like@dis.png",
	},

	/**
	 * 组件的方法列表
	 */
	methods: {
		onLike: function (event) {
			let like = this.properties.like;
			let count = this.properties.count;
			//判断点赞按钮从而+1 -1
			count = like ? count - 1 : count + 1;
			this.setData({
				count: count,
				like: !like,
			});

			//自定义事件（让父级组件可以回调）
			let behavior = this.properties.like ? "like" : "cancel";
			this.triggerEvent(
				"like", {
					behavior: behavior,
				}, {}
			);
		},
	},
});