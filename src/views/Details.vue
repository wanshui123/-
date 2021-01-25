<template>
  <div>
    <van-nav-bar
      left-text="菜品详情"
      right-text="欢迎"
      left-arrow
    ></van-nav-bar>
    <div class="floor1">
      <img src="../assets/2.jpg" style="width: 100%" alt="哦，加载失败了" />
    </div>
    <div class="floor2">
      <span>龙虾啤酒</span>
      <van-stepper value="1" integer min="1" max="40"></van-stepper>
    </div>
    <div class="floor3">
        <span>商品详情</span>
        <p>￥155.00</p>
    </div>
    <div class="floor4">
        <span>原料</span>
        <p>菜品投料标准 香辣小龙虾 冻准投料 (克)2 操作程序 原材料名称 中虾/35只 中虾/20只 大中虾/3O只 大中虾/16只 大虾/20只 油70 </p>
        <span>制作</span>
         <p>清洁小龙虾，剪去虾头，抽出虾线。锅中放油，放入葱姜蒜爆香，放入一块火锅底料，炒出红油，放入五香粉、孜然粉、小茴香、甜面酱、生抽、耗油翻炒均匀，放入小龙虾翻炒，加入啤酒和水，盖盖子炖10分钟，开盖加入盐，鸡精，香菜。</p>
    </div>
     <div>
         <van-button type="danger" size="large">加入订单</van-button>
     </div>
  </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.floor4{
   margin-top:15px;
}
.floor4>span{
    width: 100%;
    height: 35px;
    display: block;
    margin-left:10px ;
    font-weight: bold;
    color: mediumspringgreen;
    background-color:#f0f0f0;
    border-left: 6px solid mediumspringgreen;
}
.floor4>p{
    margin-top:15px ;
    font-size: 20px;
    margin-bottom:10px;
    text-indent: 30px;
    color: #aaa;
    margin-left:5px ;
}
.floor3>p{
    float: right;
    margin-right:10px ;
    margin-top:5px ;
    color: firebrick;
}
.floor3{
    font-size: 0.25rem;
    font-weight: bold;
     margin-left:15px;
}
.floor2{
    margin-top:230px ;
    font-size: 0.2rem;
    margin-left:15px;
    margin-bottom: 10px;
}
.floor2>.van-stepper{
    float: right ;
    margin-right:10px ;
}
 .van-stepper>>>button{
  width: 30px;
  height: 30px;
}
.van-stepper>>>.van-stepper__input{
    font-size: 25px;
}
   
.floor1 {
  height: 0.5rem;
}
.van-nav-bar {
  background-color: #000;
  border-bottom-left-radius: 0.05rem;
  border-bottom-right-radius: 0.05rem;
}
.van-nav-bar >>> .van-icon {
  color: white;
  font-size: 0.2rem;
}
.van-nav-bar >>> .van-nav-bar__text {
  color: white;
  font-size: 0.18rem;
}
</style>