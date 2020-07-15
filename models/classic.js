import { HTTP } from "../utils/http"

class ClassicModel extends HTTP {
  constructor() {
    super()
  }

  getLatest(sCallback) {
    this.request({
      url: 'classic/latest',
      success: (res) => {
        let key = this._getKey
        wx.setStorageSync(key, res)
        this._setLatestIndex(res.index) //设置缓存
        sCallback(res)
      }
    })
  }

  getClassic(index,nestOrPrevious,sCallback){
    let key = nextOrPrevious == 'next' ? this._getKey(index + 1) : this._getKey(index - 1)
    let classic = wx.getStorageInfoSync(key)
    if(!classic){
      this.request({
        url:`classic/${index}/${nestOrPrevious}`,
        success:(res)=>{
          wx.setStorageSync(this._getKey(res.index), res)
          sCallback(res)
        }
      })
    }
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