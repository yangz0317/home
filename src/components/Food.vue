<template>
    <div class="food-bg">
        <div class="food">
            <div class="title">推荐美食</div>
            <div class="line"></div>
            <div class="content">
                <p>Corem ipsum dolor sit amet consecter adipsicing elit sed usm tempor incididunt ut reitad dolore magna aliqua ut 
                enim minim beniaps quis nostrual exercitationullamco<br/>     
                laboris sed bcea lorem ipsum dolor comoda lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt.</p> 
            </div>
            <div class="food-image">
                <div class="part-image">
                    <img src="/static/img/food1.png" alt="">
                    <div class="name">三鲜鸡汁面</div>
                    <div class="eng">Three fresh chicken noodle sauce</div>
                </div>
                <div class="part-image">
                    <img src="/static/img/food2.png" alt="">
                    <div class="name">三鲜鸡汁面</div>
                    <div class="eng">Three fresh chicken noodle sauce</div>
                </div>
                <div class="part-image active">
                    <img src="/static/img/food3.png" alt="">
                    <div class="name">三鲜鸡汁面</div>
                    <div class="eng">Three fresh chicken noodle sauce</div>
                </div>
                <div class="part-image">
                    <img src="/static/img/food4.png" alt="">
                    <div class="name">三鲜鸡汁面</div>
                    <div class="eng">Three fresh chicken noodle sauce</div>
                </div>
            </div>
    </div>
</div>
  
</template>

<script>
export default {
  name: 'Food',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
    margin: 0;
    padding: 0;
}
.food-bg{
    width: 100%;
    height: auto;
    background: #f9f9f9;
    margin-top: 120px;
}
.food{
    position: relative;
    padding: 120px 0;
    margin: 0 auto ;
    height: auto;
    width: 62%;
}
.food .title{
    font-size: 44px;     
}
.food .line{
    margin-top: 40px;
    border-bottom: 2px solid #9d2222;
    width: 120px;
}
.food .content{
    margin-top: 30px;
    font-size: 14px;
    line-height: 26px;
}
.food .content p{
    /* text-indent: 28px; */
    margin: 0;
    color: #777777;
}
.food .food-image{
    width: 100%;
    height: 388px;
    margin-top: 90px;
    display: flex;
    justify-content: space-between;
}
.food .food-image .part-image{
    width: 262px;
    height: 100%;
    background: #fff;
    text-align: center;
}
.food .food-image .active{
    background: #a0a0a0;
    opacity: 0.7;
}
.food .food-image .part-image img{
    display: inline-block;
    margin-top: 26px;
}
.food .food-image .part-image .name{
    margin-top: 38px;
    font-size: 16px;
    font-weight: bold;
}
.food .food-image .part-image .eng{
    margin-top: 10px;
    font-size: 11px;
    color: #d0d0d0;
}
</style>