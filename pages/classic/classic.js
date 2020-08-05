// pages/classic/classic.js
import {ClassicModel} from '../../models/classic'
import {LikeModel} from '../../models/like'

let classicModel = new ClassicModel()
let likeModel = new LikeModel()

Page({
    /**
     * 页面的初始数据
     */
    data: {
        classic: null,
        latest: true,
        first: false,
        likeCount: 0, //点赞数量
        likeStatus: false //点赞状态
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        classicModel.getLatest()
            .then(res => {
                this.setData({
                    classic: res,
                    likeCount: res.fav_nums,
                    likeStatus: res.like_status
                })
            })
    },
    /**
     * 点赞组件
     * @param {*} event 回传值
     */
    onLike(event) {
        let behavior = event.detail.behavior
        likeModel.like(behavior, this.data.classic.id, this.data.classic.type)
    },
    /**
     * 重新获取点赞数量和当前是否被点赞了
     * @param artID 电影对象ID
     * @param category 点赞类型
     */
    _getLikeStatus: function (artID, category) {
        likeModel.getClassicLikeStatus(artID, category, (res) => {
            this.setData({
                likeCount: res.fav_nums,
                likeStatus: res.like_status
            })
        })
    },
    /**
     * 下一个
     * @param
     */
    onNext() {
        this._updateClassic('next')
    },
    /**
     * 上一个
     */
    onPrevious() {
        this._updateClassic('previous')
    },

    _updateClassic: function (nextOrPrevious) {
      const index = this.data.classic.index
      classicModel.getClassic(index, nextOrPrevious, (res) => {
        this._getLikeStatus(res.id, res.type)
        this.setData({
          classic: res,
          latest: classicModel.isLatest(res.index),
          first: classicModel.isFirst(res.index)
        })
      })
    }


})