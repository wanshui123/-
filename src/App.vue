<template>
  <div id="app" @mousewheel.prevent>
    <keep-alive>
      <!-- 页面缓存 减少数据库请求 -->
      <router-view v-if="$route.meta.keepAlive" />
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>
<script>
</script>
