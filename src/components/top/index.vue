<template>
    <el-affix target=".affix-container">
        <!-- <el-button type="primary">Target container</el-button> -->

        <div class="top">
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :ellipsis="false"
                @select="handleSelect">
                <el-menu-item index="0">
                    <div class="left-img">
                        <img src="@/assets/logo/logo1.png" class="img-fluid" alt="xx" />
                        <!-- 不负盛夏时光 -->
                    </div>

                </el-menu-item>
                <div class="flex-grow" />
                <el-menu-item index="1" @click="goHome('/home')">首页
                </el-menu-item>
                <el-sub-menu index="2">
                    <template #title>菜单</template>
                    <el-menu-item index="2-1" @click="goHome('/product')">
                        产品介绍
                    </el-menu-item>
                    <el-menu-item index="2-2">客户适用</el-menu-item>
                    <el-menu-item index="2-3">新闻</el-menu-item>
                    <el-sub-menu index="2-4">
                        <template #title>产品列表</template>
                        <el-menu-item index="2-4-1">II型</el-menu-item>
                        <el-menu-item index="2-4-2">儿童版</el-menu-item>
                    </el-sub-menu>
                </el-sub-menu>
                <el-sub-menu index="3">
                    <template #title>En</template>
                    <el-menu-item index="3-1">Cn</el-menu-item>
                    <el-menu-item index="3-2">En</el-menu-item>

                </el-sub-menu>
                <el-menu-item index="4" @click="goControl('/control')">控制台
                </el-menu-item>
                <el-menu-item index="5" @click="goHome('/login')">登录
                </el-menu-item>
            </el-menu>
          
        </div>
    </el-affix>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from "vue-router"

let $router = useRouter();
// 生命周期
const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}

const goHome = (path: string) => {
    $router.push({ path: path })
}

const goControl = (path: string) => {
    $router.push({ path: path })
}

</script>

<style scoped lang="scss">
// 样式
.flex-grow {
    flex-grow: 1;
}


.top {

    width: 100%;
    display: flex;

    ::v-deep(.el-menu-demo) {
        position: absolute;
        width: 100%;
        background: transparent;

        .left-img {
            img {
                width: 124px;
                height: 24px;
                vertical-align: middle;
            }
        }
    }

}
</style>
