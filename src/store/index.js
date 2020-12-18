import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router/index'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: null,
    // 현 DB 역할 중
    allUsers: [
        {id:1,name:"wonhyung",email:"cyberzzang7@g.yju.ac.kr",password:"039256"}
    ],
    isLogin: false,
    isLoginError: false,

  },
  // state(상태) 값을 변환 시키는 로직 ex) false -> true
  mutations: {
    loginSuccess(state, payload) {
      state.isLogin = true
      state.isLoginError = false
      state.userInfo=payload
    },
    loginError(state) {
      state.isLogin = false
      state.isLoginError = true
    },
    logout(state){
      state.isLogin = false
      state.isLoginError = false
      state.userInfo = null
    }
  },
  // 비지니스적인 로직
  actions: {
    // 로그인 시도
    login({dispatch}, loginObj) {
      axios
      .post("https://reqres.in/api/login", loginObj)
      .then(res => {
        let token = res.data.token
        localStorage.setItem("access_token", token)
        
        dispatch("getMemberInfo")
      }).
      catch(err => {
        alert("이메일과 비밀번호를 확인하세요.")
      })
    //   console.log(loginObj)
    //   let selectedUser = null
    //   state.allUsers.forEach(user => {
    //     if(user.email === loginObj.email) selectedUser = user
    //   })
    //   if(selectedUser === null || selectedUser.password !== loginObj.password)
    //     commit("loginError")
    //   else {
    //     commit("loginSuccess", selectedUser)
    //     router.push({ name : "Mypage" })
    //   }   
    },
    getMemberInfo({commit}) {
      let token = localStorage.getItem("access_token")
      let config = {
        header: {
          "access-token" : token
        }
      }  
      console.log(token)
      axios.get("https://reqres.in/api/users/2",config)
        .then(response => {
          let userInfo = {
            id: response.data.data.id,
            first_name: response.data.data.first_name,
            last_name: response.data.data.last_name,
            avatar: response.data.data.avatar
          }
      
          commit("loginSuccess",userInfo)
          router.push({name : "Mypage"})
        })
        .catch(()=>{
          alert("이메일과 비밀번호를 확인하세요.")
        })
    },
    logout({commit}) {
      commit('logout')
      router.push({ name : "Login"})
    }
  }
})
