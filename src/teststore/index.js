import { createStore } from "vuex";

const store = createStore({

  state: {
    features: []
    // categories : false,
    // user : false,
    // token : false,
    // refresh_token : false,
    // wallets: false,
    // allCurrencies: false, 
    // transactions: [],
    // lastTransactions: false,
    
    // currencies: ['RUB', 'USD', 'BGN', 'MVR', 'TWD']

  },
  actions: {
   async getFeatures(context, data) {
    const res = await fetch('https://test-task-frontend-2023.slava.digital', {
      method: 'POST',
      headers: {
        "Content-Type" : "appication/json;charset=utf-8"
      },
      body: JSON.stringify(data)
    })
    if (res.ok) {
      let result = await res.json(); //  result это уже объект от сервера
      console.log('result',result)
      context.commit("setFeatures", result);
    }
    return res.ok;
  },

  // async addWallet(context, data) {
  //   data = {
  //     ...data,
  //     auth : context.state.token
  //   };
  //   const res = await fetch('https://money.aprograms.ru?class=Wallet&action=add', {
  //     method: 'POST',
  //     headers: {
  //       "Content-Type" : "appication/json;charset=utf-8"
  //     },
  //     body: JSON.stringify(data)
  //   })
  //   if (res.ok) { // 200
  //     let result = await res.json(); //  result это уже объект от сервера
  //     context.dispatch("getWallets");
  //   }
  //   return res.ok;
  // },
  // async getWallets(context) {
  //   let data = {auth : context.state.token};
  //   const res = await fetch('https://money.aprograms.ru?class=Wallet&action=get', {
  //     method: 'POST',
  //     headers: {
  //       "Content-Type" : "appication/json;charset=utf-8"
  //     },
  //     body: JSON.stringify(data)
  //   })
  //   if (res.ok) { // 200
  //     let result = await res.json(); //  result это уже объект от сервера
  //     context.commit("setWallets", result);
  //   }
  //   return res.ok;
  // },
  // async deleteWallet(context, id) {
  //   let data = {
  //     id,
  //     auth: context.state.token
  //   };
  //   const res = await fetch('https://money.aprograms.ru?class=Wallet&action=remove', {
  //     method: 'DELETE',
  //     headers: {
  //       "Content-Type" : "appication/json;charset=utf-8"
  //     },
  //     body: JSON.stringify(data)
  //   })
  //   if (res.ok) { // 200
  //     let result = await res.json(); //  result - объект от сервера
  //     // console.log(result);                   // приходит 1 - можно не писать

  //     // const newWallets = this.wallets.filter(wallet => wallet.id !== id)
  //     // this.wallets = newWallets;

  //     context.dispatch("getWallets");
  //   }
  //   return res.ok;
  // },
  // async editWallet(context, data) {
  //   data = {
  //     ...data,
  //     auth : context.state.token    
  //   };
  //   const res = await fetch('https://money.aprograms.ru?class=Wallet&action=change', {
  //     method: 'PUT',
  //     headers: {
  //       "Content-Type" : "appication/json;charset=utf-8"
  //     },
  //     body: JSON.stringify(data)
  //   })
  //   if (res.ok) { // 200
  //     let result = await res.json(); //  result это уже объект от сервера
  //     context.dispatch("getWallets");
  //   }
  //   return res.ok;
  // },
  // create transaction
//   async add_transaction(context, data) {
//     data = {
//       ...data,
//       auth : context.getters.token
//     };
//     const res = await fetch('https://money.aprograms.ru?class=Transaction&action=add', {  // await из асинхронности делает синхронность, вставляет в линейный поток
//       method: 'POST',
//       headers: {
//         "Content-Type" : "appication/json;charset=utf-8"
//       },
//       body: JSON.stringify(data)
//     })
//     if (res.ok) { // 200
//       let result = await res.json(); //  result это уже объект от сервера
//       context.dispatch("getWallets");
//     }
//     return res.ok;
//   },
//   async getTransactions(context) {
//     const res = await fetch('https://money.aprograms.ru?class=Wallet&action=get_all', {
//     method: 'POST',
//     headers: {
//       "Content-Type" : "appication/json;charset=utf-8"
//     },  
//     body: JSON.stringify({auth:context.state.token})
//   })
//   if (res.ok) { // 200
//     let result = await res.json(); //  result это уже объект от сервера
//     context.commit("setTransactions", result); 
//   }
//   return res.ok;
// }
  
},
  mutations: {
    setFeatures(state, data) {   // всегда принимают state  setUser меняет изначальное состояние state пробрасыват из fetch данные
      state.features = data.features
      // state.user = data.user;
      // state.token = data.Access_token;
      // state.refresh_token = data.Refresh_token;  //rtok - используется для получения token
    },
  },
  getters: {
    features (state) {
      return state.features
    }
  }
});

export default store;