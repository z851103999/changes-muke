import {
  HTTP
} from "../utils/http"

class ClassicModel extends HTTP {

  getLatest(sCallback) {
    this.request({
      url: 'classic/latest',
      success: (res) => {
        sCallback(res)
        this._setLatestIndex(res.index) //设置缓存
        let key = this._getKey
        wx.setStorageSync(key, res)
      }
    })
  }

  //设置缓存（设置latest的长度）
  _setLatestIndex(index) {
    wx.setStorageSync('latest', index)
  }
  //读取缓存
  _getLatestIndex() {
    let index = wx.getStorageSync('latest')
    return index
  }
  //缓存每一页数据
  _getKey(partKey) {
    let key = this.prefix + '-' + parKey
    return key
  }
}

export {
  ClassicModel
}