<template>
<div>
    <div class="guide">
        <div class="title">畅游指南</div>
        <div class="line"></div>
        <div class="content">
            <p>四季皆宜，尤以5.1和10.1为首选：受全球变暖影响，5月份冰雪开始消融，山顶五月份气温在十几度左右，
            由于昼夜温差大，夜间气温低；到了7、8月份，除冰洞外，雪完全<br/>     
            消融，是理想的避暑胜地；如10月以后去雪山，一定注意防寒，9、10月份顶峰白天气温都可能在零下。</p> 
        </div>
    </div>
    <div class="slider" @mouseover="clearInv" @mouseout="runInv">
        <ul>
        <li v-for="(img, index) in imgs" :key="index" v-show="index == showIndex">
            <div class="pic">
            <img :src="'/static/'+img.src">
            </div>
            <div class="text">
                <div class="title">asd</div>
                <div class="content">1234</div>
            </div>
        </li>
        </ul>
        <div class="dots">
            <ul>
                <li class="dot" @click="showIndex = index" v-for="(img, index) in imgs" :key="index"  
            :class="index == showIndex ? 'active' : ''"></li>
            </ul>
        </div>
    </div>
</div>
</template>

<script>
import Swiper from "swiper"; 
export default {
  name: 'Guide',
  data () {
    return {
      showIndex: 0, 
        timer: null,  
        show: false,
        imgs:[
            {
                src:'img/zu21.png'
            },
            {
                src:'img/news1.png'
            },
            {
                src:'img/zu21.png'
            },
        ],  
    }
  },
  created () {
    this.timer = setInterval(() => {
    this.next();
    }, 3000)
  },
  beforeDestroy () {
    clearInterval(this.timer); 
  },
  methods:{
        previous(){
            if(this.showIndex <= 0){
                this.showIndex = this.imgs.length-1
            }else{
                this.showIndex --
            }
        },
        next(){
            if(this.showIndex >= this.imgs.length-1){
                this.showIndex = 0
            }else{
                this.showIndex ++
            }
        },
        clearInv(){
            clearInterval(this.timer);
        },
        runInv(){
            this.timer = setInterval(() => {
            this.next();
            }, 3000)
        }
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.guide{
    position: relative;
    margin: 0 auto;
    height: auto;
    width: 62%;
    margin-top: 120px;
}
.guide .title{
    font-size: 44px;     
}
.guide .line{
    margin-top: 40px;
    border-bottom: 2px solid #9d2222;
    width: 120px;
}
.guide .content{
    margin-top: 30px;
    font-size: 14px;
    line-height: 26px;
}
.guide .content p{
    text-indent: 28px;
    margin: 0;
    color: #777777;
}
.slider{
    position: relative;
    margin-top: 80px;
    width: 100%;
    height: 770px;
    background: #f9f9f9 
}
ul li{
    list-style: none;
}
.pic{
    position: absolute;
    top: 116px;
    left: 222px;
}
.text{
    position: absolute;
    top: 146px;
    right: 272px;
}
.dots{
    top: 50%;
    right: 120px;
    position: absolute;
    transform: translate(0,-50%)
}
.dot{
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #666;
    margin: 15px;
}
.active{
    background: #f00;
}
</style>