import { HTTP } from "../utils/http"

class ClassicModel extends HTTP {
  constructor() {
    super()
  }
  prefix = 'classic'
  /**
   * 获取最新一期
   * @param {*} sCallback 
   */
  getLatest(sCallback) {
    this.request({
      url: 'classic/latest',
      success: (res) => {
        sCallback(res)
        this._setLatestIndex(res.index)
        let key = this._getKey
        wx.setStorageSync(key, res)

      }
    })
  }
  /**
   * 获取当前一期的下一期
   * @param {*} index 期刊号
   * @param {*} nestOrPrevious next
   * @param {*} sCallback 
   */
  getClassic(index, nestOrPrevious, sCallback) {
    let key = nestOrPrevious === 'next' ? this._getKey(index + 1) : this._getKey(index - 1)
    let classic = wx.getStorageSync(key)
    if (!classic) {
      this.request({
        url: `classic/${index}/${nestOrPrevious}`,
        success: (res) => {
          wx.setStorageSync(this._getKey(res.index), res)
          sCallback(res)
        }
      })
      // 缓存中找到读取
    } else {
      sCallback(classic)
    }
  }
  /**
   * 判断是否第一个
   * @param {*} index 期刊号，是否是第一个
   */
  isFirst(index) {
    return index === 1 ? true : false
  }
  /**
   * 判断是否是最后一个
   * @param {*} index 期刊号
   */
  isLatest(index) {
    let latestIndex = this._getLatestIndex()
    return latestIndex == index ? true : false
  }
  /**
   * 设置缓存（设置latest的长度）
   * @param {*} index 期刊号
   */
  _setLatestIndex(index) {
    wx.setStorageSync('latest', index)
  }
  /**
   * 获取缓存
   */
  _getLatestIndex() {
    let index = wx.getStorageSync('latest')
    return index
  }
  /**
   * 获取缓存里每一页的数据
   * @param {*} partKey 
   */
  _getKey(partKey) {
    let key = this.prefix + '-' + partKey
    return key
  }
  /**
   * 获取我喜欢的书籍列表
   * @param {*} success 
   */
  getMyFavour(success) {
    let params = {
      url: 'classic/favour',
      success: success
    }
    this.request(params)
  }
  /**
   * 我喜欢的详情
   * @param {*} cid id必填整数
   * @param {*} type 类型号 100，200，300 电影音乐句子
   * @param {*} success 
   */
  getById(cid, type, success) {
    let params = {
      url: 'classic/' + type + '/' + cid,
      success: success
    }
    this.request(params)
  }
}

export { ClassicModel }