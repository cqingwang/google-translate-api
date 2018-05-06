const translate=require('./src/index')

async function test(){
    const data=await translate('show message',
    {from: 'en',
    to: 'zh-cn'
  }).catch(e=>console.log(e.message))
  console.log("data",data)
}

// translate.setProxy('http://0.0.0.0:1087')

test()