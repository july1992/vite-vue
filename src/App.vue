<!-- 主网页 -->
<template>
  <div class="affix-container">


    <Top class="top"/>
 
 <div class="content">
 
  <!-- 展示路由组件的区域 -->
  <router-view></router-view>
 
 </div>
 <Bottom/>


  </div>


</template>

<!-- import TopVue from '@' -->

<script setup lang="ts"> 
 
 
</script>

<style scoped lang="scss">
 .content{
    width: 100%;
  
  }
</style>