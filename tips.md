#### **vue 脚手架项目**
1. 安装 Node 环境
2. 安装 Vue Cli 工具：npm install -g @vue/cli
3. 创建项目：vue create my-project（my-project 是项目名称，可以自己定义）
4. 选择预设选项：创建项目时会出现预设选项，包括手动选择特性、默认特性等。选择默认选项即可，然后等待依赖包安装完成。
5. 启动项目：cd my-project     npm run serve
6. 在浏览器查看：打开浏览器 http://localhost:8080/ 
7. npm install @vueup/vue-quill@alpha --save     npm install @vueup/vue-quill@alpha --save
8. npm install @wangeditor/editor-for-vue@next --save   npm i @wangeditor/editor
9. npm install vue-router@next -S

------------------

#### **创建项目过程中遇到的问题**
`注意：创建vue-cli 项目，报错 ERROR command failed: yarn`
**解决方法一：**
Win+R 输入cmd进入到命令行界面
输入命令 重新安装yarn

npm install -g yarn

成功后重新创建vue-cli项目便可以解决了。

**解决方法二：**
进入到Windows环境中C:/users/administrator/下（此电脑--用户--admin--.vuerc）
有一个文件 .vuerc
```js
{
  "useTaobaoRegistry": false,
  "packageManager": "yarn"
}
```
只需手动更改配置内容yarn为 npm，即可更改创建项目时的包管理器了

**解决方法三：**
删除.vuerc文件，在初次创建vue项目会提示选择配置，到时候选择npm就可以。
或者
```js
{
  "useTaobaoRegistry": true,
  "packageManager": "npm"
}
```

`注意：ERROR  Error: @vitejs/plugin-vue requires vue (>=3.2.13) or @vue/compiler-sfc to be present in the dependency tree.`
node 版本问题，切换为较高的 node 版本

------------------

#### **富文本编辑器相关文档链接**

- [https://hu-snail.github.io/vue3-resource/platform/web/editor.html](https://hu-snail.github.io/vue3-resource/platform/web/editor.html)
- [https://www.wangeditor.com/v5/for-frame.html#demo-1](https://www.wangeditor.com/v5/for-frame.html#demo-1)
- [https://developer.aliyun.com/article/1163397](https://developer.aliyun.com/article/1163397)
- [https://blog.csdn.net/qq_33674679/article/details/128128291](https://blog.csdn.net/qq_33674679/article/details/128128291)

------------------

#### **vue 路由**[https://blog.csdn.net/fusheng_cn/article/details/127830102](https://blog.csdn.net/fusheng_cn/article/details/127830102)

vue-router 目前有3.x的版本和4.x的版本。其中：

⚫vue-router 3.x 只能结合vue2进行使用
⚫vue-router 4.x 只能结合vue3进行使用

#### vue-router4.0的基本使用步骤
* 在项目中安装 vue-router 
* 定义路由组件
* 声明路由链接和占位符
* 创建路由模块
* 导入并挂载路由模块
  
---------------
#### 动态路由匹配
`动态路由`：把 Hash 地址中可变的部分定义为参数项，从而提高路由规则的复用性。
在 vue-router 中使用英文的冒号：来定义路由的参数项。

* $route.params 参数对象（ 通过动态路由匹配的方式渲染出来的组件中，可以使用 $route.params 对象访问到动态匹配的参数值。）
  ```vue
    <template>
        <!-- $route.params 是路由的“参数对象” -->
        <h3>MyMovie 组件 --- {{ $route.params.id }}</h3>
    </template>
    
    <script>
    export default {
      name: 'MyMovie',
    }
    </script>
  ```
* 使用 props 接收路由参数（为了简化路由参数的获取形式，vue-router 允许在路由规则中开启 props 传参）
  ```vue
    <!-- { path: '/movie/:id', component: Movie, props: true } -->
    
    <template>
        <h3>MyMovie 组件 --- {{ id }}</h3>
    </template>
    
    <script>
    export default {
      props: ['id'], // 使用props接收路由规则中匹配到的参数项
    }
    </script>
  ```
---------------
#### 编程式导航（通过调用 API 实现导航的方式，叫做编程式导航。与之对应的，通过点击链接实现导航的方式，叫做声明式导航）
`例：`
1. 普通网页中点击 <a></a>链接、vue 项目中点击 <router-link> 都属于声明式导航
2. 普通网页中调用 location.href 跳转到新页面的方式，属于编程式导航

vue-router 中的编程式导航 API
1. this.$router.push('hash 地址') 跳转到指定的 Hash 地址，从而展示对应的组件
2. this.$router.go(数值 n) 实现导航历史的前进、后退

#### 命名路由
通过 name 属性为路由规则定义名称的方式，叫做命名路由（注意：命名路由的 name 值不能重复，必须保证唯一性）

**使用命名路由实现声明式导航**
> 为 <router-link> 标签动态绑定 to 属性的值，并通过 name 属性指定要跳转到的路由规则。期间还可以用 params 属性指定跳转期间要携带的路由参数。
```vue
  <router-link :to="{name: 'mov', params: {id : 3}}">go to movie</router-link>
```

**使用命名路由实现编程式导航**
> 调用 push 函数期间指定一个配置对象，name 是要跳转到的路由规则、params 是携带的路由参数。

```vue
<template>
  <h3>MyHome 组件</h3>
  <button @click="goToMovie(3)">go to movie</button>
</template>
 
<script>
export default {
  methods: {
    goToMovie(id) {
      this.$router.push({
        name: 'mov',
        params: {
          id: 3,
        },
      })
    },
  },
}
</script>
```

```vue
<template>
  <h3>MyMovie组件--- {{id}}</h3>
  <button @click="goBack">后退</button>
</template>
<script>
export default {
  props: ['id'],
  methods: {
    goBack() { 
      this.$router.go(-1) 
    }//后退到之前的组件页面}，
  }
}
</script>
```

### 导航守卫
> 导航守卫可以控制路由的访问权限
  * 如何声明全局导航守卫（全局导航守卫会拦截每个路由规则，从而对每个路由进行访问权限的控制。）
```vue
  <!-- 创建路由实例对象 -->
  const router = createRouter({...})
  router.beforeEach(fn)
```

  * 守卫方法的三个形参（全局导航守卫的守卫方法中接收 3 个形参，格式为：）
```vue
  const router = createRouter({...})
  router.beforeEach((to, from, next) => {
    // to 目标路由对象
    // from 当前导航正要离开的路由对象
    // next 是一个函数，表示放行
  })
```

`注意：`
1. 在守卫方法中如果不声明 next 形参，则默认允许用户访问每一个路由
2. 在守卫方法中如果声明了 next 形参，则必须要调用 next() 函数，否则不允许用户访问任何一个路由
   
   * next 函数的 3 中调用方式
    直接放行：next()
    强制其停留在当前页面：next(false)
    强制其跳转到登录页面：next('/login')

   * 结合 token 控制后台主页的访问权限
  ```vue
  // 声明全局的导航守卫
  router.beforeEach((to, from, next) => {
    const token = localStorage.getItem('token')  // 读取 token 

    if (to.path === '/main' && !token) {  // 访问“后台主页”，且 token 值不存在
      next(false)  // 不允许跳转
      next('/login')  // 强制跳转到“登录页面”
    } else {
      next()  // 直接放行，允许访问后台主页
    }
  })
  ```

#### 后端路由
> 后端路由指的是：请求方式、请求地址与 function 处理函数之间的对应关系。如：在 nodejs 中，express 路由的基本用法如下：
```js
  const express = require('express')
  const router = express.Router()

  router.get('/userlist', function(req,res) { /** 路由的处理函数 */})
  router.post('/adduser', function(req,res) { /** 路由的处理函数 */})

  module.exports = router
```

#### SPA 与前端路由（Hash 地址与组件之间的对应关系）
SPA 指的是一个 web 网站只有唯一的一个 HTML 页面，所有组件的展示与切换都在这唯一的一个页面内完成。此时，不同组件之间的切换需要通过前端路由来实现。（结论，在 SPA 项目中，不同功能之间的切换，要依赖于前端路由来完成）

### 路由规则
注意1：
> 在 hash 地址中， / 后面的参数项，叫做“路径参数”
> 在路由“参数对象”中，需要使用 this.$route.params 来访问路径参数

注意2：
> 在 hash 地址中，? 后面的参数项，叫做“查询参数”
> 在路由“参数对象”中，需要使用 this.$route.query 来访问查询参数
> <router-link to="/movie/2?name=zs&age=20">雷神</router-link>

注意3：
在 this.$route 中，path 只是路径部分；fullPath 是完整的地址
例如：
/movie/2?name=zs&age=20 是 fullPath 的值
/movie/2 是 path 的值