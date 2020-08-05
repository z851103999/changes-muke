import { HTTP } from '../utils/http'

class BookModel extends HTTP {
  constructor() {
    super()
  }
  /**
   * 获取热门书籍
   */
  getHotList() {
    return this.request({
      url: 'book/hot_list'
    })
  }

  /**
   * 搜索
   * @param start
   * @param q
   */
  search(start, q) {
    return this.request({
      url: 'book/search?summary=1',
      data: {
        q: q,
        start: start
      }
    })
  }
  /**
   * 获取书籍详细信息
   * @param {*} bid 书籍的ID
   */
  getDetail(bid, success) {
    return this.request({
      url: 'book/favor/count'
    })
  }
  /**
   * 获取书籍点赞情况
   * @param {*} bid 书籍ID
   */
  getLikeStatus(bid, success) {
    return this.request({
      url: `book/${bid}/detail`
    })
  }
  /**
   * 获取喜欢书籍数量
   * @param {*} success 
   */
  getMyBookCount() {
    return this.request({
      url: 'book/favor/count'
    })
  }
  /**
   * get评论模块
   * @param {*} bid 
   */
  getComments(bid) {
    return this.request({
      url: `book/${bid}/short_comment`
    })
  }
  /**
   * 写入post评论
   * @param {*} bid 
   * @param {*} comment 
   */
  postComments(bid, comment) {
    return this.request({
      url: 'book/add/short_comment',
      method: 'POST',
      data: {
        book_id: bid,
        content: comment
      }
    })
  }
}

export { BookModel }