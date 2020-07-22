import  {classicBeh} from '../classic-beh.js'

const mMgr = wx.getBackgroundAudioManager()

Component({
    /**
     * 组件的属性列表
     */
    behaviors: [classicBeh], // 继承通用的代码（这样properties可以少写两个参数的接收）
    properties: {
        src: String
    },

    /**
     * 组件的初始数据
     */
    data: {
        playing: false,// 默认暂停播放
        pauseSrc: 'images/player@pause.png',    // 开始播放
        playSrc: 'images/player@play.png'       // 暂停播放
    },

    /**
     * 在组件实例进入页面节点树时执行
     * @param event
     */
    attached: function (event) {
        // 判断音乐是否在播放
        this._recoverStatus()

        // 监听总控开关状态
        this._monitorSwitch()
    },

    /**
     * 在组件实例被从页面节点树移除时执行
     * @param event
     */
    detached: function(event) {

    },

    /**
     * 组件的方法列表
     */
    methods: {
        /**
         * 播放音乐
         * @param event
         */
        onPlay: function (event) {
            // 图片切换
            if (!this.data.playing) {
                this.setData({
                    playing: true
                })
                console.log('this.properties.src', this.properties.src)
                mMgr.title = 'yinyue'
                mMgr.src = this.properties.src
            } else {
                this.setData({
                    playing: false
                })
                mMgr.pause()
            }
        },

        /**
         * 判断音乐是否在播放
         * @private
         */
        _recoverStatus: function () {
            if (mMgr.paused) {
                this.setData({
                    playing: false
                })
                return
            }
            if (mMgr.src == this.properties.src) {
                this.setData({
                    playing: true
                })
            }
        },

        /**
         * 监听总控开关状态，同步播放状态
         * @private
         */
        _monitorSwitch: function () {
            // 播放
            mMgr.onPlay(() => {
                this._recoverStatus()
            })
            // 暂停
            mMgr.onPause(() => {
                this._recoverStatus()
            })
            // 关闭总控开关
            mMgr.onStop(() => {
                this._recoverStatus()
            })
            // 音乐播放结束
            mMgr.onEnded(() => {
                this._recoverStatus()
            })
        }
    }
})