<template>
     <div>
        <div class="sight">
            <div class="title">景区特色</div>
            <div class="line"></div>
            <div class="content">
                <p>服务中心是一个集景区简介、景点导览图、景点售票、宣传推介、导游服务、集散换乘、咨询投诉、
                酒店咨询、应急救援等综合型服务机构。为了方便游客游玩，服务中心还设有<br/>     
                ATM 机、网络取票机、母婴室、休息室、特产超市 以及三星级标准化公厕等。各项设施设计以游客为本理念，满足残疾人和特殊人群的使用要求。</p> 
            </div>
            <div class="btn">
                <!-- <div class="btn-one" v-bind:class="{active:isActive}">特色景点</div>
                <div class="btn-two">周边游玩</div> -->
                <ul>
                    <li v-for="(item,index) in items" 
                        :class="{active:changeIndex == index}"
                        @click="change(index)">
                        <div class="text">{{item.text}}</div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="image clear">
                <div class="image-item">
                    <img src="/static/img/xueshan.png" alt="">
                </div>
                <div class="image-item">
                    <img src="/static/img/pubu.png" alt="">
                </div>
                <div class="image-item">
                    <img src="/static/img/richu.png" alt="">
                </div>
                <div class="image-item">
                    <img src="/static/img/xuehu.png" alt="">
                </div>
                <div class="bottom">
                    <div class="text">
                        <div class="word">还有有更多特色景点欢迎您的到来···</div>
                        <div class="btn">查看更多</div>
                    </div>
                </div>
        </div>
    </div>         
</template>

<script>
export default {
  name: 'Sight',
  data () {
    return {
        changeIndex:0,
        items:[{"text":"特色景点"},{"text":"周边游玩"}]
    }
  },
  methods:{
      change(index){
        this.changeIndex = index;
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
.sight{
    position: relative;
    margin: 0 auto;
    height: auto;
    width: 62%;
    margin-top: 154px;
}
.sight .title{
    font-size: 44px;     
}
.sight .line{
    margin-top: 40px;
    border-bottom: 2px solid #9d2222;
    width: 120px;
}
.sight .content{
    margin-top: 30px;
    font-size: 14px;
    line-height: 26px;
}
.sight .content p{
    text-indent: 28px;
    margin: 0;
    color: #777777;
}
.sight .btn{
    margin-top: 92px;
    margin-left: 18px;
}
.btn ul li{
    display: inline-block;
    list-style: none;
    width: 202px;
    height: 22px;
    font-size: 14px;
    cursor: pointer;
    border-right: 1px solid #ddd;
}
.btn .text{
    margin-left: 36px;
}
.btn ul li.active{
    width: 126px;
    height: 36px;
    /* text-align: center; */
    line-height: 36px;
    background: #349dd8;
    border-radius: 20px;
    color: #fff;   
}
.image{
    position: relative;
    margin-top: 72px;
    width: 100%;
    height: 980px;
    overflow: hidden;
}
.image .image-item{
    float: left;
    /* box-sizing: border-box; */
    width: 25%;
}
.clear:after{
    content: "";
    display: block;
    clear: both;
}
.image .bottom{
    width: 100%;
    height: 180px;
    position: absolute;
    background: linear-gradient(left,#b5bbdf,#ccabbc);
    top: 800px;
    left: 0;
}
.image .bottom .text{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 61%;
}
.word, .btn{
    display: inline-block;
}
.image .bottom .text .word{
    font-size: 24px;
    color: #fff;
}
.image .bottom .text .btn{
    position: absolute;
    right: 0;
    width: 194px;
    height: 50px;
    border-radius: 50px;
    background: #fff;
    line-height: 50px;
    text-align: center;
    font-size: 18px;
}
</style>
