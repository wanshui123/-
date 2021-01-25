<template>
  <div id="container">
    <div class="header">
      <router-link slot="left" to="/">
        <van-icon name="arrow-left" class="iconstyle" />
      </router-link>
      <!-- <span>小龙虾必吃榜TOP6</span> -->
    </div>
    <div class="shoping">
      
      <van-card
        class="van-vard"
        num="1"
        tag="top1"
        price="29.9"
        title="小龙虾烧烤"
        desc="小龙虾+百威啤酒"
        thumb="https://i.loli.net/2021/01/19/Lnt3dHg5P96kKjD.jpg">
        
        
      
        <template #footer>
          <van-tag plain type="danger">销量：150</van-tag><br />
          <van-tag plain type="danger">评分：</van-tag><br />
          <van-rate v-model="value1" readonly />
        </template>
      </van-card>
      <van-card
        class="van-vard"
        num="1"
        tag="top2"
        price="39.9"
        title="蒜蓉小龙虾"
        desc="25小龙虾，小分量大诱惑"
        thumb="https://i.loli.net/2021/01/19/EabNXiu3Sloe6gH.jpg">
        <template #footer>
          <van-tag plain type="danger">销量：150</van-tag><br />
          <van-tag plain type="danger">评分：</van-tag><br />
          <van-rate v-model="value1" readonly />
        </template>
      </van-card>
      <!-- 3 -->
      <van-card
        class="van-vard"
        num="1"
        tag="top3"
        price="599.9"
        title="单只澳洲进口龙虾"
        desc="提前预定，高级定制"
        thumb="https://i.loli.net/2021/01/19/Lnt3dHg5P96kKjD.jpg">
        <template #footer>
          <van-tag plain type="danger">销量：100</van-tag><br />
          <van-tag plain type="danger">评分：</van-tag><br />
          <van-rate v-model="value2" readonly />
        </template>
      </van-card>
      <!-- 4 -->
      <van-card
        class="van-vard"
        num="1"
        tag="top4"
        price="19.9"
        title="秘制麻辣小龙虾"
        desc="30只麻辣小龙虾，小分量大诱惑"
        thumb="https://i.loli.net/2021/01/19/zYMhDEyPLIk15Uj.jpg">
        <template #footer>
          <van-tag plain type="danger">销量：150</van-tag><br />
          <van-tag plain type="danger">评分：</van-tag><br />
          <van-rate v-model="value2" readonly />
        </template>
      </van-card>
      <!-- 5 -->
      <van-card
        class="van-vard"
        num="1"
        tag="top5"
        price="29.9"
        title="吮指全味虾球"
        desc="大大的满足感油然而生"
        thumb="https://i.loli.net/2021/01/19/c58723V6eSBiG94.jpg">
        <template #footer>
          <van-tag plain type="danger">销量：150</van-tag><br />
          <van-tag plain type="danger">评分：</van-tag><br />
          <van-rate v-model="value3" readonly />
        </template>
      </van-card>
      <!-- 6 -->
      <van-card
        class="van-vard"
        num="1"
        tag="top6"
        price="39.9" 
        title="麻辣虾尾"
        desc="30只麻辣小龙虾，小分量大诱惑"
        thumb="https://i.loli.net/2021/01/19/q5jYyQae9krN2Du.jpg">
        <template #footer>
          <van-tag plain type="danger">销量：150</van-tag><br />
          <van-tag plain type="danger">评分：</van-tag><br />
          <van-rate v-model="value3" readonly />
        </template>
      </van-card>
    </div>
  </div>
</template>

<style scoped>
#container {
  background-color: #f6f6f6;
  height: 100vh;
  border-radius: 0.2rem;
}
#container >>> .header {
  background-color: #f00;
  height: 30%;
  text-align: center;
  margin: 0 auto;
  padding: 2px;
  border-radius: 0.2rem;
  color: #f00;
  font: bold 微软雅黑;
  background-image: url(../assets/images/小龙虾必吃榜.png);
  margin-bottom: 2px;
}
.iconstyle {
  position: absolute;
  left: -2px;
  top: 10px;
  color: #fff;
}

.van-card {
 margin-bottom: 2px;
  font-size: 16px;
  border:2px solid #ccc;
  border-radius: 5px;
}

</style>
<script>
export default {
  data(){
    return{
      value1:5,
      value2:4,
      value3:4.5,
      value4:4
    }
  }
}
</script>
