import { config } from '../config';

//错误提示信息
const tips = {
  1: "抱歉，出现一个错误",
  1005: "appkey无效",
  3000: "期刊不存在"
}

class HTTP {
  constructor() {}

  request(params){
    if(!params.metheod){
      params.metheod = 'GET'
    }
    wx.request({
      url: config.api_base_url + params.url,
      method:params.method,
      data:params.data,
      header:{
        'contentt-type':'application/json',
        'appkey':config.appkey
      },
      success:(res)=>{
        const code = res.statusCode.toString()
        const startChar = code.charAt(0)
        if(startChar == '2'){
          //返回参数
          params.success && params.success(res.data)
        }else{
          //appkey 错误
          params.error && params.error(res)
          this._show_error(error_code)
        }
      },
      fail:(err)=>{
        params.fail && params.fail(err)
        //断网
        this._show_error(1)
        console.log(err)
      }
    })
  }

  //通用错误提示：_代表:私有方法
  _show_error(error_code) {
    if (!error_code) {
      error_code = 1
    }
    const tip = tips[error_code]
    wx.showToast({
      title: tip ? tip : tip[1],
      icon: 'none',
      duration: 2000
    })

  }
}

export { HTTP }