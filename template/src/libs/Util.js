import axios from 'axios'
// import router from '@/router/index'
import config from '@/config/index'
// import  from '@/config/index'
// import * as types from '@/store/mutation-types'

let util = {

};
//  创建axiox 实例
util.http = axios.create({
  baseURL: config.api,//把baseURL赋值为config.api，也就是调后台数据的基础地址；baseURL默认为空
  timeout: 30000//请求时间30000毫秒，超时失败
});

//浏览器给Web服务器发送了一个Request, Web服务器接到Request后进行处理，生成相应的Response，然后发送给浏览器， 浏览器解析Response中的HTML
// http request 拦截器
util.http.interceptors.request.use(
  config => {
    config.headers = {
      // 'Content-Type': 'application/x-www-form-urlencoded'//form表单格式
      'Content-Type': 'application/json'//json格式
    };
    let token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = token
    }
    return config
  },
  err => {
    return Promise.reject(err)
  });

// http response 拦截器
util.http.interceptors.response.use(
  response => {
    return response
  },
  error => {
    if (error.response) {
      console.log(error);
      switch (error.response.status) {//判断报错信息，报错401有两种情况，没有token，或者token过期
        case 401:
        console.log('?////');
          localStorage.token = '';//把token清空
          localStorage.removeItem('token');
          // debugger;
          //重新跳转到获取token的页面
          window.location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' + config.appid + '&redirect_uri=' + config.loginUrl + '/getToken' + '&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect'
      }
    }
    // console : Error: Request failed with status code 402
    console.log(error);
    return Promise.reject(error.response.data)
  });

export default util
