// pages/book/book.js
import { BookModel } from '../../models/book'
let bookModel = new BookModel()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 书籍数据
    books: [],
    // 搜索框隐藏
    searching: false,
    // 不需要分页
    more: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   bookModel.getHotList((data)=>{
     console.log(data)
     this.setData({
       books:data
     })
   })
  },

  // 打开搜索框
  onSearching: function () {
    this.setData({
      searching: false
    })
  },

  // 组件回调-关闭弹窗
  onCancel: function () {
    this.setData({
      searching: false
    })
  },

  // 滚动条滚动到底部，触发加载更多
  onCancel: function () {
    this.setData({
      more: random(16)
    })
  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})