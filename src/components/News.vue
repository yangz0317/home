<template>
  <div>
    <div class="news">
      <div class="text">
        <div class="title">新闻公告</div>
        <div class="line"></div>
        <div class="content">
          <div class="small-title">为绿色低碳酒店加盟生态打call</div>
          <p>随着经济发展和人们生活水平的不断提高，人们的旅游需求热度高涨，旅游市<br/>
            场井喷式增长，酒店加盟行业如火如荼。旗下"轻"特色品牌青年·都市迷你酒店践行<br/>
            环保高标准搭建健康入住环境，致力于打造绿色低碳酒店，为宾客提供高品质的住<br/>
            宿体验。</p>
          <p>青年·都市迷你酒店是随着面向全球的新型国际青年主题酒店，推崇简约、时尚、<br/>     
            个性与环保并重，以全新的经营理念，坚持为顾客创造快乐、自由、温馨的住宿体<br/>
            验，致力于为背包客、大学生、商旅人士、普通大众群体提供优质服务。酒店设计<br/>
            上充分利用节能技术和环保材料，减小酒店运行能源消耗，让顾客充分体验绿色酒<br/>
            店的舒适惬意。酒店运营商一改高能耗的传统模市······</p> 
        </div>
        <div class="service">
          <div class="ser">便民服务</div>
          <div class="icon">
            <div class="part">
              <img src="/static/img/1.png" alt="">
              <div class="tip">门票价格</div>
            </div>
            <div class="part">
              <img src="/static/img/2.png" alt="">
              <div class="tip">交通指南</div>
            </div>
            <div class="part">
              <img src="/static/img/3.png" alt="">
              <div class="tip">景区地图</div>
            </div>
            <div class="part">
              <img src="/static/img/4.png" alt="">
              <div class="tip">常见问题</div>
            </div>
          </div>
        </div>
      </div>
      <div class="img">
        <div class="img-one"><img src="/static/img/news1.png" alt=""></div>
        <div class="img-two">
          <img src="/static/img/news2.png" alt="">
        </div>
      </div>
      <div class="more">
          <div class="more-title">
            <img src="/static/img/quotes.png" alt="">
            <span>查看更多</span>
          </div>
          <div class="more-content">
            <span>旅游如何做个“讲究”的文明人?</span>落实带薪休假制度，鼓励城乡居民利用带···<br/>
            <span>建立旅游三方主体诚信制度。</span>鼓励带薪休假错峰旅游···
          </div>
          <div class="line"><img src="/static/img/line.png" alt=""></div>
        </div>
    </div>
    <div class="card clear">
      <div class="card-one"> 
          <img class="icon" src="/static/img/food.png" alt="">
          <div class="tip">特色美食</div>
          <img src="/static/img/arrow.png" alt="">
      </div>   
      <div class="card-two">
          <img class="icon" src="/static/img/road.png" alt="">
          <div class="tip">交通路线</div>
          <div class="word">我们为您准备各类交通路线、自驾游路线、高铁车次、室内可乘坐公交线路</div>
      </div>
      <div class="card-three">
          <img class="icon" src="/static/img/hotel.png" alt="">
          <div class="tip">酒店客栈</div>
          <img src="/static/img/arrow.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'News',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .news{
      position: relative;
      margin: 0 auto;
      height: auto;
      width: 62%;
      margin-top: 120px;
    }
    .text .title{
      font-size: 44px;     
    }
    .text .line{
      margin-top: 40px;
      border-bottom: 2px solid #9d2222;
      width: 120px;
    }
    .text .content{
      margin-top: 36px;
      font-size: 14px;
      line-height: 26px;
    }
    .content p{
      text-indent: 28px;
      margin: 0;
      color: #777777;
    }
    .content .small-title{
      font-size: 16px;
      font-weight: bold;
      color: #333333;
    }
    .service{
      margin-top: 66px;
      width: 510px;
    }
    .service .ser{
      font-size: 16px;
      margin-left: 8px;
      font-weight: bold;
      color: #333333;
    }
    .service .icon{
      margin-top: 50px;
      display: flex;
      justify-content: space-between;
    }
    .service .icon .part{
      text-align: center;
    }
    .service .icon .part .tip{
      margin-top: 14px;
      font-size: 14px;
      color: #959595;
    }
    .img{
      position: absolute;
      top: 0;
      right: 0;
    }
    .img .img-one{
      position: absolute;
      top: 0;
      right: 0;
    }
    .img .img-two{
      position: absolute;
      top: 222px;
      right: 380px;
      width: 220px;
      height: 220px;
      border-radius: 50%;
      background: #fff;
    }
    .img .img-two img{
      position: absolute;
      right: 10px;
      top: 10px;
    }
    .more{
      position: absolute;
      right: 0;
      top: 510px;
    }
    .more .more-title span{
      display: inline-block;
      margin-left: 4px;
      font-size: 14px;
      color: #333333;
    }
    .more .more-content{
      margin-top: 28px;
      line-height: 32px;
      font-size: 16px; 
      color: #888888;
    }
    .more .more-content span{
      color: #333333;
    }
    .more .line{
      margin-top: 20px;
    }
    .card{
      margin-top: 120px;
      width: 100%;
      height: 260px;
      background: #8edcd5;
    }
    .clear:after{
      content: "";
      display: block;
      clear: both;
    }
    .card-one, .card-two, .card-three{
      position: relative;
      width: 33.3%;
      float: left;
      text-align: center;
      color: #fff;
    }  
    .card-two{
      height: 296px;
      margin: 0 auto;
      background: #7dcaf3;
    }
    .card .icon{
      margin-top: 72px;
    }
    .card .tip{
      margin: 26px 0;
      font-size: 16px;
    }
    .card .word{
      font-size: 14px;
    }

</style>
