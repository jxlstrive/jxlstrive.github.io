import { createRouter, createWebHistory } from 'vue-router'

// const routes = [
//   { path: '/', redirect: '/wangEditor' },
//   {
//     path: '/wangEditor',
//     name: 'wangEditor',
//     component: () => import("@/view/wangEditor.vue"),
//   },
//   {
//     path: '/quillEditor',
//     name: 'quillEditor',
//     component: () => import("@/view/quillEditor.vue"),
//   }
// ]

// const router = createRouter({
//   // 自定义路由高亮的 class 类
//   // 在创建路由的实例对象时，可以基于 linkActiveClass 属性，自定义路由链接被激活时所应用的类名（ 默认的 router-link-active 类名会被覆盖掉）
//   linkActiveClass: 'router-active',
//   // 通过 history属性指定路由的工作模式
//   history: createWebHistory(),
//   routes,
// })

// export default router

// 通过 children 属性声明子路由规则

import HelloWorld from '@/components/HelloWorld.vue'
import WangEditor from '@/view/wangEditor.vue'
import QuillEditor from '@/view/quillEditor.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/wangEditor' },
    // 路由中的动态参数以 ： 进行声明，冒号后面的是动态参数的名称
    { path: '/hello/:id', component: HelloWorld, props: true },
    {
      path: '/helloWorld',
      name: 'wangEditor',
      component: () => import("@/components/HelloWorld.vue"),
      children: [  //通过children属性嵌套子级路由规则;// 注意：子路由的 path 不要以 / 开头
        { path: 'tab1', component: WangEditor },//访问/about/tab1时，展示 WangEditor 组件
        { path: 'tab2', component: QuillEditor },//访问/about/tab2时，展示 QuillEditor 组件
      ],
    },
  ]
})

export default router
