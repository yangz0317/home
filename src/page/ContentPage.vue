<template>
  <div>
    <my-header></my-header>
    <div class="page">
        <div class="content">
            <div class="title">旅游如何做个“讲究”的文明人?</div>
            <div class="text">
                <p>人们的生活水平提高了，对外面世界的向往愈加强烈。据市旅游局最新统计，过去五年，全市有超过300万人次出国旅游，
                    而今年前三季度，仅全市旅行社组织的出境团人数已接近30万人。</p>
                <p>然而，由于不经常出国，一些游客对当地文化、习俗、法律等不了解，时有“顺捎”马桶盖、抢吃自助餐、公共场所大声喧哗等不文明现象出现。</p>
                <div class="image"><img src="/static/img/content-image.png" alt=""></div>
                <p>人们的生活水平提高了，对外面世界的向往愈加强烈。据市旅游局最新统计，过去五年，全市有超过300万人次出国旅游，
                    而今年前三季度，仅全市旅行社组织的出境团人数已接近30万人。</p>
                <p>但是走出国门后，也不是所有的事情可以随心所欲。李女士在讲述她的泰国之行中，就提到了一些美中不足：“一些团队成员的不文明行为让我‘骨鲠在喉’，
                    比如部分博物馆明令禁止拍照，还是有人偷偷拿出相机，还有人随意触碰展品、吃零食、大声说话等。”由于大家在一个团队，当场不便挑明，遇到记者时，
                    李女士才有了一吐为快的机会。</p>
            </div>
        </div>
    </div>       
    <my-Footer></my-Footer>
  </div>
</template>

<script>
import myHeader from '../components/HeaderContent'
import myFooter from '../components/Footer'
export default {
  name: 'ContentPage',
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
.page{
    margin-top: 120px;
    margin-bottom: 120px;
}
.page .content{
    margin: 0 auto;
    width: 85%;
    height: auto;
}
.page .content .title{
    text-align: center;
    font-size: 26px;
}
.page .content p{
    font-size: 22px;
    text-indent: 44px;
    margin-top: 50px;
}
.page .content .image{
    margin-top: 36px;
}
</style>