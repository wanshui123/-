import Vue from 'vue'
import {
  INCREMENT_FOOD_COUNT,
  DECREMENT_FOOD_COUNT,
  CLEAR_CART,
  RECEIVE_USER_INFO,
  ADDLIST_SHOP
} from './mutations-type'
export default {


  [INCREMENT_FOOD_COUNT](state, { food }) {
    if (!food.count) { // 第一次增加
      // food.count = 1  // 新增属性(没有数据绑定)
      /*
      对象
      属性名
      属性值
       */
      Vue.set(food, 'count', 1) // 让新增的属性也有数据绑定
      // 将food添加到cartFoods中
      state.cartFoods.push(food)
    } else {
      food.count++
    }
  },

  [DECREMENT_FOOD_COUNT](state, { food }) {
    if (food.count) {// 只有有值才去减
      food.count--
      if (food.count === 0) {
        // 将food从cartFoods中移除
        state.cartFoods.splice(state.cartFoods.indexOf(food), 1)
      }
    }
  },

  //清空购物车
  [CLEAR_CART](state) {

    // 清除food中的count
    state.cartFoods.forEach(food => food.count = 0)
    // 移除购物车中所有购物项
    state.cartFoods = []
  },

  [RECEIVE_USER_INFO](state, { userInfo }) {
    state.userInfo = userInfo;
    state.isLogin = 1;
  },


  //更新商家地址
  [ADDLIST_SHOP](state, { addlist }) {
    // console.log(addlist)
    state.Addlist = addlist
    // console.log(state.Addlist)
  }

}