<!--------商铺地址选择---------->
<template>
  <diV>
    <my-header></my-header>
    <van-row
      class="shop_add"
      v-for="(item, index) in addList"
      :key="index"
      @click="choose(item, index)"
    >
      <!-- 左侧图片 -->
      <van-col span="6" class="img">
        <img src="" alt="" />
      </van-col>
      <!-- 右侧内容 -->
      <van-col span="18">
        <h2>{{ item.s_name }}</h2>
        <div>
          <p>
            <van-icon name="location-o" /><span>{{ item.s_add }}</span>
          </p>
          <p>
            <van-icon name="clock-o" /><span>{{ item.s_work }}</span>
          </p>
        </div>
      </van-col>
    </van-row>
    <share-sheet></share-sheet>
  </diV>
</template>
<script>
import MyHeader from "../components/MyHeader.vue";
import ShareSheet from "../components/ShareSheet.vue";
import { mapState } from "vuex";
export default {
  components: {
    MyHeader,
    ShareSheet,
  },
  data() {
    return {
      addList: [],
    };
  },
  mounted() {
    this.axios.get("/address").then((res) => {
      this.addList = res.data.data;
    });
  },
  methods: {
    choose(item, index) {
      this.$store.dispatch("addlistShop", { item });
      this.$router.replace("./");
    },
    skip() {},
  },
  computed: {
    ...mapState(["Addlist"]),
  },
};
</script>
<style>
.shop_add {
  border-top: 1px solid #dcdcdc;
  box-shadow: 0px 3px 0.08rem #9b9999;
  margin: 0.07rem 0 0.07rem 0;
}
.shop_add .van-col {
  padding: 0.1rem;
}
.shop_add h2 {
  font-size: 0.18rem;
  border-bottom: 1px solid #dcdcdc;
  padding-top: 0.08rem;
  padding-bottom: 0.08rem;
}
.shop_add p {
  font-size: 0.12rem;
  /* margin-top:0.1rem; */
  /* margin-bottom:0.1rem; */
  display: inline-flex;
}
.shop_add span {
  padding-top: 0.01rem;
  padding-left: 0.05rem;
  line-height: 0.15rem;
}
.shop_add p > i {
  font-size: 0.16rem;
  height: 100%;
}
</style>