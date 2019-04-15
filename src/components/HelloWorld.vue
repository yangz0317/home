<template>
  <div>
    <div class="box">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">1
          <img src="/static/img/1.png" alt="">
          </div>
          <div class="swiper-slide">2
          <img src="/static/img/2.png" alt="">
          </div>
          <div class="swiper-slide">3
          <img src="/static/img/3.png" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper"; 
export default {
  name: 'HelloWorld',
  data () {
    return {
    }
  },
  mounted(){
    var mySwiper = new Swiper('.swiper-container', {
    autoplay:true,
    loop:true,
    speed:3000,
    direction: 'vertical',
    pagination: '.swiper-pagination',
    })
  },
}
</script>

<style scoped>
.box{
  position: relative;
  width: 400px;
  height: 300px;
  border: 1px solid #000;
  margin: auto;
}
</style>
