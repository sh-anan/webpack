import Env from './env'
//判断三种环境是哪种环境
const ajaxUrl = Env === 'development'
  ? 'http://wx.shpost.wmeimob.com/api'//nginx配置的代理地址server_name
  : Env === 'production'
    ? 'http://wx.shpost.wmeimob.com/api'
    : 'http://wx.xianni.wmeimob.com';

const appid = Env === 'development'
  ? 'wxbcda0257af55982a'//appid,公众号的ID
  : Env === 'production'
    ? 'wx38d55ed98ff369f9'
    : 'wx017048f8b68ee7f7';

const mpid = Env === 'development'//mpid问后台要，没有就不用了，不用改也不用删不影响
  ? '10005'
  : Env === 'production'
    ? '8'
    : '7';
const loginUrl = 'http://wx.shpost.wmeimob.com';//nginx配置的代理地址server_name
let config = {
  api: ajaxUrl,
  appid,
  mpid,
  loginUrl
};
export default config
