// eslint-disable-next-line
import { UserLayout, BasicLayout, BlankLayout } from '@/layouts'
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
    redirect: '/hoc/basic',
    children: [
      // example
      {
        path: '/example',
        name: 'example',
        redirect: '/example/foo',
        component: RouteView,
        meta: { title: 'menu.example', keepAlive: true, icon: 'table', permission: ['dashboard'] },
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
            path: '/example/test',
            name: 'example.test',
            component: () => import('@/views/example/test'),
            meta: { title: 'menu.example.test', keepAlive: true, permission: ['dashboard'] },
          },
        ],
      },
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

      // // account
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
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/Login'),
      },
      {
        path: 'register',
        name: 'register',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/Register'),
      },
      {
        path: 'register-result',
        name: 'registerResult',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/RegisterResult'),
      },
      {
        path: 'recover',
        name: 'recover',
        component: undefined,
      },
    ],
  },
  // {
  //   path: '/index1',
  //   name: 'index1',
  //   component: 'PageView',
  //   children: [
  //     {
  //       path: 'register-result',
  //       name: 'registerResult',
  //       component: () => import(/* webpackChunkName: "user" */ '@/views/user/RegisterResult'),
  //     },
  //   ],
  // },
  {
    path: '/404',
    component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/404'),
  },
]
