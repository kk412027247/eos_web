import { Api, JsonRpc, JsSignatureProvider } from 'eosjs';


// 只有在node.js环境下，才需要以下模组； 浏览器不需要引入这个模组。
// const fetch = require('node-fetch');
// 只有在node.js / IE11 /IE Edge 浏览器环境下，需要以下模组；
const { TextDecoder, TextEncoder } = require('text-encoding');

// 这里的私钥填写刚才生成的私钥
// const privateKey = "5Jg3KWnT2cUsKvmiJYRo7iULfwyhunVU3uDrZEAvjtq2GpABiJQ";
// const signatureProvider = new JsSignatureProvider([privateKey]);

// rpc 对象可以运行 eos的rpc命令
// rpc 命令查询 https://eosio.github.io/eosjs/classes/json_rpc.jsonrpc.html
export const rpc = new JsonRpc('http://junglehistory.cryptolions.io:18888', { fetch });


// api 对象可以运行eos的合约，比如转账，创建账号等等(需要费用的操作)
// export const api = new Api({ rpc, signatureProvider, textDecoder: new TextDecoder(), textEncoder: new TextEncoder() });


export class Wallet {

  // 初始化钱包
  constructor(){
    const privateKey = localStorage.getItem(`privateKey`);
    if (!!privateKey) {
      this.unlock(privateKey)
    }else{
      this.api = {}
    }
    console.log(this.api)
  }

  // 解锁钱包
  unlock(...privateKey){
    this.api = new Api({
      rpc,
      signatureProvider: new JsSignatureProvider(privateKey),
      textDecoder: new TextDecoder(),
      textEncoder: new TextEncoder()
    });
  }

  // 锁钱包
  lock(){
    this.api = {}
  }
}


export const wallet = new Wallet();







