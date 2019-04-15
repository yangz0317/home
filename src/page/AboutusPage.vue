<template>
  <div>
    <my-header></my-header>
    <div class="content">
        <div class="image">
            <img src="/static/img/about-contact.png" alt="">
            <div class="contact">联系我们</div>
        </div>
        <div class="code"><img src="/static/img/ewm.png" alt=""></div>
        <div class="text">
            <div class="line">资询电话：400-029-6628</div>
            <div class="line">邮政编码：710048</div>
            <div class="line">旅游咨询电话：400-029-6628</div>
            <div class="line">智慧景区地址：西安市曲江新区369互联网创新创业基地1号楼5层</div>
            <div class="line">门票：景区门票70元/人，成承认在各平台网上预订门票 </div>
        </div>
    </div>
    <my-Footer></my-Footer>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
import myHeader from '../components/HeaderAboutus'
import myFooter from '../components/Footer'
export default {
  name: 'AboutPage',
  data () {
    return {   
    }
  },
  components:{
    myHeader,
    myFooter
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
    margin: 0;
    padding: 0;
}
.content{
    width: 82%;
    margin: 120px auto;
    position: relative;
    /* overflow: hidden; */
}
.content .contact{
    position: absolute;
    top: 32px;
    left: 124px;
    color: #fff;
    font-size: 24px;
}
.content .code{
    margin-top: 100px;
    text-align: center;
}
.content .text{
    margin-top: 120px;
    font-size: 22px;
}
.content .text .line{
    margin-left: 150px;
    margin-bottom: 22px; 
}
</style>