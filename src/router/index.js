import Vue from "vue"
import VueRouter from "vue-router"
import store from "../store/index"

Vue.use(VueRouter)

const rejectAuthUser = (to, from, next) => {
  if(store.state.isLogin === true) {
    // 이미 로그인 된 유저니까 막아야함.
    alert("이미 로그인 하였습니다.")
    // 홈으로 리다이렉션
    next('/')
  } else {
    next()
  }
}

const onlyAuthUser = (to, from, next) => {
  if(store.state.isLogin === false) {
    // 아직 로그인 안 된 유저니까 막아야함.
    alert("로그인이 필요한 기능입니다.")
    // 홈으로 리다이렉션
    next('/')
  } else {
    next()
  }
}

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "home" */ "../views/Home.vue")
  },
  {
    path: "/login",
    name: "Login",
    // 라우터에 들어오기 전에 먼저 실행 시켜 본다. next 하고 패스가 지정되어 있으면 리다이렉션 시키는 방식
    beforeEnter: rejectAuthUser,
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Login.vue")
  },
  {
    path: "/mypage",
    name: "Mypage",
    beforeEnter: onlyAuthUser,
    component: () =>
      import(/* webpackChunkName: "mypage" */ "../views/Mypage.vue")
  },
  {
    path: "/profile",
    name: "Profile",
    beforeEnter: onlyAuthUser,
    component: () =>
      import(/* webpackChunkName: "profile" */ "../views/Profile.vue")
  },
  {
    path: "/contact",
    name: "Contact",
    beforeEnter: onlyAuthUser,
    component: () =>
      import(/* webpackChunkName: "contact" */ "../views/Contact.vue")
  },
  {
    path: "/board",
    name: "Board",
    beforeEnter: onlyAuthUser,
    component: () =>
      import(/* webpackChunkName: "board" */ "../views/Board.vue")
  },
  {
    path: '/read',
    name: 'Read',
    component: ()=>
      import("../components/Read.vue")
  },

  {
    path: '/detail/:contentId',
    name: 'Detail',
    component: ()=>
      import("../components/Detail.vue")
  }, 
  {
    path: '/contentDetail/:contentId',
    name: 'ContentDetail',
    component: ()=>
      import("../components/ContentDetail.vue")
  }, 
    {
    path: '/boardCreate/:contentId?',
    name: 'BoardCreate',
    component: ()=>
      import("../components/BoardCreate.vue")
  }, 

]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
})

export default router
