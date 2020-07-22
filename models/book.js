import { HTTP } from '../utils/http'

class BookModel extends HTTP {
  constructor() {
    super()
  }
  /**
   * 获取热门书籍
   * @param {*} success 
   */
  getHotList(success) {
    const params = {
      url: 'book/hot_list',
      success:success
    }
    this.request(params)
  }
  /**
   * 获取书籍详细信息
   * @param {*} bid 书籍的ID
   * @param {*} success 
   */
  getDetail(bid,success){
   const params = {
     url:'book/' + bid + '/detail',
     success:success
   }
   this.request(params)
  }
  /**
   * 获取书籍点赞情况
   * @param {*} bid 书籍ID
   * @param {*} success 
   */
  getLikeStatus(bid,success){
    const params = {
      url:'/book/' + bid + '/favor',
      success:success
    }
    this.request(params)
  }
  /**
   * 获取喜欢书籍数量
   * @param {*} success 
   */
  getMyBookCount(success){
    const params = {
      url:'/book/favor/count',
      success:success
    }
    this.request(params)
  }
}

export { BookModel }