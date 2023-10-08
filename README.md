# 一、接口

## 二、项目其他配置

## 2.1 浏览器自动打开

找到 package.json 配置文件!

```
 "scripts": {
  "dev": "vite --open",
  "build": "vue-tsc && vite build",
  "preview": "vite preview"
 },
```

## 2.2src 别名的配置

找到 vite.config.ts 配置文件。

**如果红色语法提示请安装@types/node 是 TypeScript 的一个声明文件包，用于描述 Node.js 核心模块和常用的第三方库的类型信息**

```
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';
// https://vitejs.dev/config/
export default defineConfig({
 plugins: [vue()],
 resolve: {
  alias: {
   "@": path.resolve(__dirname, 'src')
  }
 }
})
```

找到`tsconfig.json`配置文件,找到配置项 compilerOptions 添加配置,这一步的作用是让 IDE 可以对路径进行智能提示

```
 "baseUrl": ".",
  "paths": {
   "@/*": ["src/*"]
  }
```


//微信开放平台官网地址
https://open.weixin.qq.com
//查看微信扫码登录文档
https://mp.weixin.qq.com/


如果报错找不到sass

```
npm install -D sass`
```

导入element-ui
```
npm install element-plus --save
```

适合做官网的css动画效果
```
Animate.css    
https://animate.style/
npm install animate.css --save


https://blog.csdn.net/LuckyWinty/article/details/122356189
```
集成bootstrap 做企业官网https://mb.bootcss.com/themes/boomerang/index.html#
导入依赖
```
npm i bootstrap@5.3.0-alpha1
```
在vite.config.ts里设置路径
```
 '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap')
```
在main.ts里设置路径
```
import '~bootstrap/scss/bootstrap.scss'
```

安装路由
```
npm install vue-router@4
```







构建部署
```
npm run build

```
设置端口
```
  "preview": "vite preview --port 7100"
```
查看构建
```
 npm run preview
```

引入axios
```
npm install axios
```
在utils文件夹内，创建request.ts,在api文件夹内二次封装axios
