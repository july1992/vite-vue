import { createRouter, createWebHistory } from 'vue-router';
export default createRouter({
    history:createWebHistory(),
    routes:[
        {
            path:'/',
            component:() => import('@/components/page/home/index.vue'),
            meta:{
                title:'首页'
            }
        },
        {
            path:'/home',
            component:() => import('@/components/page/home/index.vue'),
            meta:{
                title:'首页'
            }
        },
        {
            path:'/hospital',
            component:() => import('@/components/page/hospital/index.vue'),
            meta:{
                title:'医院'
            }
        },
        {
            path:'/product',
            component:() => import('@/components/main/product/index.vue'),
            meta:{
                title:'产品'
            }
        },
        {
            path:'/login',
            component:() => import('@/components/page/wxlogin/index.vue'),
            meta:{
                title:'产品'
            }
        }
    ]
})