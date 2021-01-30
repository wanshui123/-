<template>
  <div class="header">
    <!-- 导航栏 -->
    <van-nav-bar title="商品详情">
      <template #left>
        <van-icon
          name="arrow-left"
          size="0.23rem"
          color="white"
          @click="toleft"
        />
      </template>
      <template #right>
        <van-icon name="like-o" color="white" size="0.23rem" />
      </template>
    </van-nav-bar>
    <!-- 单个详情页 -->
    <div class="floor1">
      <img
        :src="details.img"
        style="width: 100%; height: 100%"
        alt="哦，加载失败了"
      />
    </div>
    <div class="floor2">
      <span>{{ details.name }}</span>
      <!-- <van-stepper value="1" integer min="1" max="10"></van-stepper> -->
    </div>
    <div class="floor3">
      <span>{{ details.i_desc }}</span>
      <p>价格：{{ details.price }}</p>
    </div>
    <!-- 订单跳转 -->
    <div>
      <van-button type="danger" size="large" @click="join()"
        >加入订单</van-button
      >
    </div>

    <!-- 购物车 -->
    <cart-list></cart-list>
  </div>
</template>
<script>
import CartList from "../components/Cartfoot";
export default {
  components: {
    CartList,
  },
  data() {
    return {
      details: {},
      i_id: 1,
    };
  },
  methods: {
    toleft() {
      this.$router.push("/shop_recommand");
    },
    join() {
      let isAdd = true;
      this.$store.dispatch("updateFoodCount", { isAdd, food: this.details });
    },
  },
  mounted() {
    /**接受传来的数据 */
    let i_id = this.$route.query.id;
    // let i_id = Number(i_id)+1
    console.log(typeof i_id, i_id);
    if (i_id == 0) {
      i_id = 0;
    }
    /** 请求数据接口*/

    this.axios.post("/shop_recommand", `i_id=${i_id}`).then((res) => {
      const {
        i_id,
        i_desc,
        i_price: price,
        i_image: img,
        i_subject: name,
      } = res.data.data;
      this.details = { i_id, i_desc, price, img, name };
    });
  },
  computed: {},
};
</script>
<style scoped>
.floor3 > p {
  float: right;
  margin-right: 0.15rem;
  margin-top: 0.2rem;
  color: firebrick;
  font-size: 0.2rem;
  margin-bottom: 0.15rem;
}
.floor3 {
  font-size: 0.2rem;
  font-weight: bold;
  margin-left: 15px;
  margin-top: 0.2rem;
}
.floor2 {
  margin-top: 0.1rem;
  font-size: 0.2rem;
  margin: left 0.15rem;
  margin-bottom: 0.1rem;
}
.floor2 > .van-stepper {
  float: right;
  margin-right: 10px;
}
.van-stepper >>> button {
  width: 30px;
  height: 30px;
}
.van-stepper >>> .van-stepper__input {
  font-size: 25px;
}
.floor1 {
  width: 100%;
  height: 2.5rem;
  border: 1px solid red;
  box-sizing: border-box;
}

.van-nav-bar {
  background-color: #ff0303;
  border-bottom-left-radius: 0.05rem;
  border-bottom-right-radius: 0.05rem;
}

.van-nav-bar >>> .van-nav-bar__title {
  color: white;
  font-size: 0.15rem;
}
</style>
