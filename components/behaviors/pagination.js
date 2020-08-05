let paginationBev = Behavior({
  data: {
    count: 20,
    empty: false,
    //搜索列表
    dataArray: [],
    // 服务器总记录数
    total: null,
    // 没有搜索到任何数据
    noneResult: false,
    // 加载按钮
    loading: false
  },
  method: {
    /**
     *  获取下一页数据
     * @param dataArray
     * @returns {boolean}
     */
    setMoreData(dataArray) {
      if (dataArray == false) {
        this.data.ending = true
        if (this.data.dataArray == false) {
          this.setData({
            empty: true
          })
        }
      }
      // 两个数组合并
      let tamp = this.data.dataArray.concat(dataArray)
      this.data.start += this.data.count
      this.setDate({
        dataArray: temp
      })
      return true
    },
    /**
     * 设置一共几条数据
     * @param total
     */
    setTotal(total) {
      this.data.total = total
      if (total == 0) {
        this.setData({
          noneResult: true
        })
      }
    },
    /**
     * 判断下一页是否还有数据
     * @returns {boolean}
     */
    hasMore(){
      if(this.data.dataArray.length >= this.data.total){
        return false
      }else{
        return true
      }
    },
    /**
     * 获取从当前第几条开始查询
     * @returns {number}
     */
    getCurrentStart(){
      return this.data.dataArray.length
    },
    /**
     * 清空数据，loading结束
     */
    initialize(){
      this.setData({
        dataArray:[],
        noneResult:false,
        loading:false
      })
    },
    /**
     * 判断是否有加锁
     * @returns {boolean}
     */
    isLocked(){
      return this.data.loading ? true : false
    },
    /**
     * 加载中
     */
    locked(){
      this.setData({
        loading:true
      })
    },
    /**
     * 结束加载
     */
    unLocked(){
      this.setData({
        loading:false
      })
    }
  }
})

export {
  paginationBev
}