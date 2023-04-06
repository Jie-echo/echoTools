class BuriedPoint {
  constructor() {
    this.token = '';
  }

  getTime() {
    return Date.parse( new Date() ).toString().substring(0, 10);
  }

  getTimeAndString() {
    const nonce = this.randomString(10); //随机10个字符
    const time = this.getTime();
    return {
      nonce, time
    }
  }

  sign() {
    //处理加密签名 可以使用crypto-js/hmac-sha1
  }

  async getToken() {
    //模拟获取埋点token
    const { nonce, time } = this.getTimeAndString()
    const result = await new Promise((resolve, reject) => {
      setTimeout(() => resolve(nonce + time), 1000)
    })

    return result
  }

  async action(params) {
    if(!this.token) {
      this.token = await this.getToken();
    }

    const { nonce, time } = this.getTimeAndString()
    const body = [{
      ...params,
      time: Number(time)
    }];

    //console.log()模拟 触发请求 埋点上报
    console.log(body,'埋点上报！')
  }

  randomString() {
    const str = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = ''
    for(let i of str){
      result += str[Math.floor(Math.random() * str?.length)]
    }
    return result
  }
}

export default BuriedPoint;