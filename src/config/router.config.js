// eslint-disable-next-line
import { UserLayout, BasicLayout, BlankLayout } from '@/layouts'
// import { PageView } from '@/layouts/index'
// import { bxAnaalyse } from '@/core/icons'

const RouteView = {
  name: 'RouteView',
  render: (h) => h('router-view'),
}

export const asyncRouterMap = [
  {
    path: '/',
    name: 'index',
    component: BasicLayout,
    meta: { title: 'menu.home' },
    redirect: '/host',
    children: [
      // example
      {
        path: '/example',
        name: 'example',
        redirect: '/example/foo',
        component: RouteView,
        meta: { title: 'menu.example', keepAlive: true, icon: 'eye', permission: ['table'] },
        children: [
          {
            path: '/example/foo',
            name: 'example.foo',
            component: () => import('@/views/example/Foo'),
            meta: { title: 'menu.example.foo', keepAlive: true, permission: ['dashboard'] },
          },
          {
            path: '/example/bar',
            name: 'example.bar',
            component: () => import('@/views/example/Bar'),
            meta: { title: 'menu.example.bar', keepAlive: true, permission: ['dashboard'] },
          },
          {
            path: '/console/example/test',
            name: 'example.test',
            component: () => import('@/views/example/test'),
            meta: { title: 'menu.example.test', keepAlive: true, permission: ['dashboard'] },
          },
        ],
      },
      // // host
      // {
      //   path: '/host',
      //   name: 'host',
      //   component: RouteView,
      //   redirect: '/host/hostPage',
      //   meta: { title: 'menu.host', keepAlive: true, icon: 'table', permission: [ 'dashboard' ] },
      //   children: [
      //     {
      //       path: '/host/hostPage',
      //       name: 'host.hostPage',
      //       meta: { title: 'menu.host.hostPage', keepAlive: true, permission: [ 'dashboard' ] },
      //       component: () => import('@/views/host/HostPage'),
      //     },
      //   ],
      // },
      // hoc demo
      {
        path: '/hoc',
        name: 'hoc',
        component: RouteView,
        redirect: '/hoc/basic',
        meta: { title: 'menu.hoc', icon: 'table', permission: ['table'] },
        children: [
          {
            path: '/hoc/basic',
            name: 'hoc.basic', // 注意 name 是不可以重名的
            component: () => import(/* webpackChunkName: "hoc" */ '@/pages/hoc/BasicHoc'),
            props: require('@/pages/hoc/foo.bar.baz.vue'),
            meta: { title: 'menu.hoc.basic', keepAlive: true, permission: ['table'] },
          },
        ],
      },
      // table demo
      {
        path: '/table',
        name: 'table',
        component: RouteView,
        redirect: '/table/basic',
        meta: { title: 'menu.table', icon: 'table', permission: ['table'] },
        children: [
          {
            path: '/table/basic',
            name: 'basic',
            component: () => import(/* webpackChunkName: "table" */ '@/pages/table/Basic'),
            meta: { title: 'menu.table.basic', keepAlive: true, permission: ['table'] },
          },
          {
            path: '/table/filter',
            name: 'filter',
            component: () => import(/* webpackChunkName: "table" */ '@/pages/table/Filter'),
            meta: { title: 'menu.table.filter', keepAlive: true, permission: ['table'] },
          },
        ],
      },
      // page / template demo
      {
        path: '/template',
        name: 'template',
        component: RouteView,
        redirect: '/template/search',
        meta: { title: 'menu.template', icon: 'table', permission: ['table'] },
        children: [
          {
            path: '/template/search',
            name: 'template.search',
            redirect: '/template/search/basic',
            component: RouteView,
            meta: { title: 'menu.template.search', icon: 'table', permission: ['table'] },
            children: [
              {
                path: '/template/search/basic',
                name: 'template.search.basic',
                // 异步组件参考 https://cn.vuejs.org/v2/guide/components-dynamic-async.html#%E5%BC%82%E6%AD%A5%E7%BB%84%E4%BB%B6
                component: () => import(/* webpackChunkName: "templates" */ '@/templates/Search'),
                props: require('@/modules/templates/search/basic'),
                meta: { title: 'menu.template.search.basic', keepAlive: true, permission: ['table'] },
              },
            ],
          },
          {
            path: '/template/form',
            name: 'template.form',
            redirect: '/template/form/basic',
            component: RouteView,
            meta: { title: 'menu.template.form', icon: 'table', permission: ['table'] },
            children: [
              {
                path: '/template/form/basic',
                name: 'template.form.basic',
                // 异步组件参考 https://cn.vuejs.org/v2/guide/components-dynamic-async.html#%E5%BC%82%E6%AD%A5%E7%BB%84%E4%BB%B6
                component: () => import(/* webpackChunkName: "templates" */ '@/templates/Create'),
                props: require('@/modules/templates/form/basic'),
                meta: { title: 'menu.template.form.basic', keepAlive: true, permission: ['table'] },
              },
            ],
          },
        ],
      },
      // Exception
      {
        path: '/exception',
        name: 'exception',
        component: RouteView,
        redirect: '/exception/403',
        meta: { title: 'menu.exception', icon: 'warning', permission: ['exception'] },
        children: [
          {
            path: '/exception/403',
            name: 'Exception403',
            component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/403'),
            meta: { title: 'menu.exception.not-permission', permission: ['exception'] },
          },
          {
            path: '/exception/404',
            name: 'Exception404',
            component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/404'),
            meta: { title: 'menu.exception.not-find', permission: ['exception'] },
          },
          {
            path: '/exception/500',
            name: 'Exception500',
            component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/500'),
            meta: { title: 'menu.exception.server-error', permission: ['exception'] },
          },
        ],
      },

      // account
      // {
      //   path: '/account',
      //   component: RouteView,
      //   redirect: '/account/center',
      //   name: 'account',
      //   meta: { title: 'menu.account', icon: 'user', keepAlive: true, permission: ['user'] },
      //   children: [
      //     {
      //       path: '/account/center',
      //       name: 'center',
      //       component: () => import('@/views/account/center'),
      //       meta: { title: 'menu.account.center', keepAlive: true, permission: ['user'] },
      //     },
      //     {
      //       path: '/account/settings',
      //       name: 'settings',
      //       component: () => import('@/views/account/settings/Index'),
      //       meta: { title: 'menu.account.settings', hideHeader: true, permission: ['user'] },
      //       redirect: '/account/settings/basic',
      //       hideChildrenInMenu: true,
      //       children: [
      //         {
      //           path: '/account/settings/basic',
      //           name: 'BasicSettings',
      //           component: () => import('@/views/account/settings/BasicSetting'),
      //           meta: { title: 'account.settings.menuMap.basic', hidden: true, permission: ['user'] },
      //         },
      //         {
      //           path: '/account/settings/security',
      //           name: 'SecuritySettings',
      //           component: () => import('@/views/account/settings/Security'),
      //           meta: {
      //             title: 'account.settings.menuMap.security',
      //             hidden: true,
      //             keepAlive: true,
      //             permission: ['user'],
      //           },
      //         },
      //         {
      //           path: '/account/settings/custom',
      //           name: 'CustomSettings',
      //           component: () => import('@/views/account/settings/Custom'),
      //           meta: { title: 'account.settings.menuMap.custom', hidden: true, keepAlive: true, permission: ['user'] },
      //         },
      //         {
      //           path: '/account/settings/binding',
      //           name: 'BindingSettings',
      //           component: () => import('@/views/account/settings/Binding'),
      //           meta: {
      //             title: 'account.settings.menuMap.binding',
      //             hidden: true,
      //             keepAlive: true,
      //             permission: ['user'],
      //           },
      //         },
      //         {
      //           path: '/account/settings/notification',
      //           name: 'NotificationSettings',
      //           component: () => import('@/views/account/settings/Notification'),
      //           meta: {
      //             title: 'account.settings.menuMap.notification',
      //             hidden: true,
      //             keepAlive: true,
      //             permission: ['user'],
      //           },
      //         },
      //       ],
      //     },
      //   ],
      // },
    ],
  },
  {
    path: '*',
    redirect: '/404',
    hidden: true,
  },
]

/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [
  {
    path: '/user',
    component: UserLayout,
    redirect: '/user/login',
    children: [
      {
        path: 'login',
        name: 'login',
        component: () => import('@/views/user/Login'),
      },
      {
        path: 'register',
        name: 'register',
        component: () => import('@/views/user/Register'),
      },
      {
        path: 'register-result',
        name: 'registerResult',
        component: () => import('@/views/user/RegisterResult'),
      },
      {
        path: 'recover',
        name: 'recover',
        component: undefined,
      },
    ],
  },
  // host
  {
    path: '/host',
    name: 'host',
    component: () => import('@/views/host/index'),
    meta: { keepAlive: true },
    children: [
      {
        path: '/host/hostPage',
        name: 'host.hostPage',
        meta: { keepAlive: true },
        component: () => import('@/views/host/HostPage'),
      },
      {
        path: 'classification',
        name: 'host.classification',
        component: () => import('@/views/classification/tree'),
      },
      {
        path: 'calendar',
        name: 'host.calendar',
        component: () => import('@/views/host/Calendar'),
      },
      // account
      {
        path: 'account',
        component: RouteView,
        redirect: '/host/account/center',
        name: 'host.account',
        meta: { title: 'menu.account', icon: 'user', keepAlive: true, permission: ['user'] },
        children: [
          {
            path: '/host/account/center',
            name: 'center',
            component: () => import('@/views/account/center'),
            meta: { title: 'menu.account.center', keepAlive: true, permission: ['user'] },
          },
        ],
      },
      // search
      {
        path: 'serach:content',
        name: 'host.search',
        component: () => import('@/views/search/searchResult'),
      },
    ],
  },
  {
    path: '/404',
    component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/404'),
  },
  // personal
  {
    path: '/personal:userId',
    name: 'personal',
    component: BlankLayout,
    redirect: '/personal/index',
    children: [
      {
        path: 'index',
        name: 'personal.index',
        meta: { keepAlive: true },
        component: () => import('@/views/personal/index'),
        children: [
          {
            path: 'introduction',
            name: 'personal.introduciton',
            component: () => import('@/views/personal/introduction'),
          },
          {
            path: 'classification',
            name: 'personal.classification',
            component: () => import('@/views/personal/ClassificationTree'),
          },
          {
            path: 'myProduct',
            name: 'personal.myProduct',
            component: () => import('@/views/personal/MyProduct'),
          },
          {
            path: 'achievement',
            name: 'personal.achievement',
            component: () => import('@/views/personal/achievement'),
          },
          {
            path: 'photo',
            name: 'personal.photo',
            component: () => import('@/views/personal/photo'),
          },
          {
            path: 'video',
            name: 'personal.video',
            component: () => import('@/views/personal/video'),
          },
        ],
      },
    ],
  },
  // // classification
  // {
  //   path: '/classification',
  //   name: 'classification',
  //   component: BlankLayout,
  //   children: [
  //     {
  //       path: '/classification/tree',
  //       name: 'tree',
  //       component: () => import('@/views/classification/tree'),
  //     },
  //     {
  //       path: '/classification/nextTree',
  //       name: 'nextTree',
  //       component: () => import('@/views/classification/nextTree'),
  //     },
  //     {
  //       path: '/classification/project',
  //       name: 'project',
  //       component: () => import('@/views/classification/project'),
  //     },
  //   ],
  // },
]
