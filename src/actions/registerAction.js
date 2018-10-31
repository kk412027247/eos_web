import { replace } from 'connected-react-router'
import ecc from 'eosjs-ecc';
import {rpc, wallet} from '../wallet/wallet';



export const handleUsername= username => ({
  type:'HANDLE_USERNAME',
  username: username.target.value,
});

export const handlePassword = password => ({
  type:'HANDLE_PASSWORD',
  password: password.target.value,
});

// 检测用户名是否存在




// 登录
export const handleLogin = () => (dispatch, getState) => {
  // 获取用户名密码
  (async () => {
    const {username, password} = getState().registerReducer;

    if(username.length !== 12){
      alert('用户名必须为12位');
      return;
    }

      const userInfo = await rpc.get_account(username);
      const privateKey = ecc.seedPrivate(username + password);
      const publicKey = ecc.privateToPublic(privateKey);

      if(userInfo.permissions[0].required_auth.keys[0].key === publicKey){

      // 用replace替换掉目前所在的登录页面路由，不让后退到这里。'没有记录，就没有发生'
      dispatch(replace('/page1/'));

      // 解锁钱包
      wallet.unlock(privateKey);

      // 私钥保存在浏览器，
      localStorage.setItem(`privateKey`, privateKey);

      // store 保存私钥
      dispatch(handlePrivateKey(privateKey));

      return;
    }

    alert('密码错误');

  })().catch((err)=>{
    alert('账号不存在');
    console.log(err);
  })
};

// 退出

export const handleLogout = () => (dispatch) =>{
  dispatch(replace('/'));

  // 清除浏览器储存
  localStorage.clear();

  //  store 清除私钥
  dispatch(handlePrivateKey(''))

};

export const handlePrivateKey = privateKey => ({
  type:'HANDLE_PRIVATE_KEY',
  privateKey
});
