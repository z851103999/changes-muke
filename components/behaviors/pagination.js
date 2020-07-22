let paginationBev = Behavior({
  properties: {},
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
    // 获取下一页数据
    setMoreDate(dataArray) {
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
    // 设置共几条
    setTotal(total) {
      this.data.total = total
      if (total == 0) {
        this.setData({
          noneResult: true
        })
      }
    }
  }
})