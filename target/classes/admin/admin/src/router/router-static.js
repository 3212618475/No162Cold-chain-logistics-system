import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
    // 解决多次点击左侧菜单报错问题
    const VueRouterPush = VueRouter.prototype.push
    VueRouter.prototype.push = function push (to) {
    return VueRouterPush.call(this, to).catch(err => err)
    }
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
import beifen from '@/views/modules/databaseBackup/beifen'
import huanyuan from '@/views/modules/databaseBackup/huanyuan'

     import users from '@/views/modules/users/list'
    import address from '@/views/modules/address/list'
    import dictionary from '@/views/modules/dictionary/list'
    import gonggao from '@/views/modules/gonggao/list'
    import huowu from '@/views/modules/huowu/list'
    import huowuFenpei from '@/views/modules/huowuFenpei/list'
    import huowuOrder from '@/views/modules/huowuOrder/list'
    import kuaidiyuan from '@/views/modules/kuaidiyuan/list'
    import liuyan from '@/views/modules/liuyan/list'
    import wangdian from '@/views/modules/wangdian/list'
    import yonghu from '@/views/modules/yonghu/list'
    import config from '@/views/modules/config/list'
    import dictionaryGonggao from '@/views/modules/dictionaryGonggao/list'
    import dictionaryHuowu from '@/views/modules/dictionaryHuowu/list'
    import dictionaryHuowuOrder from '@/views/modules/dictionaryHuowuOrder/list'
    import dictionaryHuowuOrderFenpei from '@/views/modules/dictionaryHuowuOrderFenpei/list'
    import dictionaryIsdefault from '@/views/modules/dictionaryIsdefault/list'
    import dictionarySex from '@/views/modules/dictionarySex/list'
    import dictionaryWangdian from '@/views/modules/dictionaryWangdian/list'





//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }, {
        path: '/huanyuan',
        name: '数据还原',
        component: huanyuan
    }, {
        path: '/beifen',
        name: '数据备份',
        component: beifen
    }, {
        path: '/users',
        name: '管理信息',
        component: users
    }
    ,{
        path: '/dictionaryGonggao',
        name: '公告类型',
        component: dictionaryGonggao
    }
    ,{
        path: '/dictionaryHuowu',
        name: '货物类型',
        component: dictionaryHuowu
    }
    ,{
        path: '/dictionaryHuowuOrder',
        name: '订单类型',
        component: dictionaryHuowuOrder
    }
    ,{
        path: '/dictionaryHuowuOrderFenpei',
        name: '订单类型',
        component: dictionaryHuowuOrderFenpei
    }
    ,{
        path: '/dictionaryIsdefault',
        name: '是否默认地址',
        component: dictionaryIsdefault
    }
    ,{
        path: '/dictionarySex',
        name: '性别类型',
        component: dictionarySex
    }
    ,{
        path: '/dictionaryWangdian',
        name: '网点类型',
        component: dictionaryWangdian
    }
    ,{
        path: '/config',
        name: '轮播图',
        component: config
    }


    ,{
        path: '/address',
        name: '收货地址',
        component: address
      }
    ,{
        path: '/dictionary',
        name: '字典',
        component: dictionary
      }
    ,{
        path: '/gonggao',
        name: '公告',
        component: gonggao
      }
    ,{
        path: '/huowu',
        name: '货物',
        component: huowu
      }
    ,{
        path: '/huowuFenpei',
        name: '订单分配',
        component: huowuFenpei
      }
    ,{
        path: '/huowuOrder',
        name: '货物订单',
        component: huowuOrder
      }
    ,{
        path: '/kuaidiyuan',
        name: '快递员',
        component: kuaidiyuan
      }
    ,{
        path: '/liuyan',
        name: '留言板',
        component: liuyan
      }
    ,{
        path: '/wangdian',
        name: '网点信息',
        component: wangdian
      }
    ,{
        path: '/yonghu',
        name: '用户',
        component: yonghu
      }


    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
