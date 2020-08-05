import { HTTP } from '../utils/http'

class LikeModel extends HTTP {
  /**
   * 点赞
   * @param behavior
   * @oaram artID 点赞对象，例如你对电影的进行点赞ID
   * @param category 点赞类型分为重，100电影 200音乐 300橘子 400书籍
   * **/

  like(behavior, artID, category) {
    let url = behavior === 'like' ? 'like' : 'like/cancel'
    console.log(url)
    this.request({
      url: url,
      method: 'POST',
      data: {
        art_id: artID,
        type: category
      }
    })
  }

  /**
   * 获取点赞信息
   * @param  artID 电影对象的id
   * @param {*} category 点赞类型
   * @param {*} sCallback 回调函数
   */
  getClassicLikeStatus(artID, category, sCallback) {
    this.request({
        url: `classic/${category}/${artID}/favor`,
        success: sCallback
    })
}
}

export { LikeModel }