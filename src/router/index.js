import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/page/HomePage'
import LoginPage from '@/page/Login/LoginPage'
import UserCenterPage from '@/page/UserCenter/UserCenterPage'
import HomePageDefault from '@/page/HomePageDefault'
import WithTabPage from '@/page/WithTab/WithTabPage'
import DataListPage from '@/page/DataList/DataListPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: HomePage,
      children: [{
        path: '',
        name: 'homePageDefault',
        component: HomePageDefault
      }, {
        path: 'userCenter',
        component: UserCenterPage,
      }, {
        path: 'withTab',
        component: WithTabPage
      }, {
        path: 'dataList',
        component: DataListPage
      }]
    },
    {
      path: '/login',
      name: 'loginPage',
      component: LoginPage
    }
  ]
})
