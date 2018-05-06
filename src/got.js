const URI = require('url');
// const HttpsAgent = require('https-proxy-agent');
const HttpAgent = require('proxy-agent');


const shadowSocksAgent = (proxy='http://0.0.0.0:1087') => {
  const options = URI.parse(proxy);
  // options = {...options, secureProxy: false}

  return new HttpAgent(options);
};

const _got = require('got');
const got=(url,options={})=>{
  const {proxy}=options
  const defaultAgent=shadowSocksAgent(proxy)
  const {agent=defaultAgent}=options
  return _got(url,{agent,...options})
}

module.exports=got
