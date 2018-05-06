const URI = require('url');
// const HttpsAgent = require('https-proxy-agent');
const HttpAgent = require('proxy-agent');

let agentServer=''
const setProxy=(proxy)=>{
  agentServer=proxy
}

const shadowSocksAgent = (proxy=agentServer) => {
  if(!proxy){
    return null
  }
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
module.exports.setProxy=setProxy