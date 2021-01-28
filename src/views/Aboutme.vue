<template>
  <div class="container">
    <div class="header">
      <router-link slot="left" to="/me">
        <van-icon name="arrow-left" class="iconstyle" />
      </router-link>
      <div class="top">关于我们</div>
      <!-- <div class="item"></div> -->
      <div class="desc">
        <div class="list">小龙虾行业领导、践行者</div>
        <!-- <div class="list"><img src="../assets/images/back.png" ></div> -->
      </div>
      <div class="desc">
        <div class="list">关于我们:</div>
        <div class="list">版本号：V1.1.2</div>
      </div>
      <div class="desc">
        <div class="list">联系我们:</div>
        <div class="list">1047130467@qq.com</div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.container {
  height: 100vh;
  position: relative;
  font-size: 0.15rem;
}
.container >>> .header {
  height: 35%;
  background-color: #fff;
}

.iconstyle {
  position: absolute;
  left: 0.08rem;
  top: 0.1rem;
  color: white;
}
.container >>> .top {
  height: 0.4rem;
  line-height: 0.4rem;
  text-align: center;
  color: white;
  background-color: #ff0303;
  font-size: 0.18rem;
}

.container >>> .desc {
  height: 0.5rem;
  line-height: 0.5rem;
  background-color: #fff;
  border: 1px solid #e6e6e6;
  border-radius: 2px;
  display: flex;
  justify-content: space-between;
  padding-left: 0.1rem;
  padding-right: 0.1rem;
}
</style>
