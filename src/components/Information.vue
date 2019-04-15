<template>
  <div class="information">
        <div class="title">热门资讯</div>
        <div class="line"></div>
        <div class="content">
            <p>Corem ipsum dolor sit amet consecter adipsicing elit sed usm tempor incididunt ut reitad dolore magna aliqua ut 
            enim minim beniaps quis nostrual exercitationullamco<br/>     
            laboris sed bcea lorem ipsum dolor comoda lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt.</p> 
        </div>
        <div class="info">
            <div class="left">
                <img src="/static/img/info.png" alt="">
            </div>
            <div class="right">
                <div class="part">
                    <div class="date">
                        <div class="day">25</div>
                        <div class="month">OCTOBER</div>
                    </div>
                    <div class="part-content">
                        <div class="tip">SAM JONES</div>
                        <div class="small-title">为绿色低碳酒店加盟生态打call</div>
                        <p class="text">随着经济发展和人们生活水平的不断提高，人们的旅游需求热度高涨，<br/>
                                        旅游市场井喷式增长，酒店加盟行业如火如荼。业内分析人士认为，环保、<br/>
                                        健康产业必将成为未来的朝阳产业，而酒店加盟事业···</p>
                    </div>
                </div>
                <div class="part-line"></div>
                <div class="part">
                    <div class="date">
                        <div class="day">14</div>
                        <div class="month">OCTOBER</div>
                    </div>
                    <div class="part-content">
                        <div class="tip">SAM JONES</div>
                        <div class="small-title">为绿色低碳酒店加盟生态打call</div>
                        <p class="text">随着经济发展和人们生活水平的不断提高，人们的旅游需求热度高涨，<br/>
                                        旅游市场井喷式增长，酒店加盟行业如火如荼。业内分析人士认为，环保、<br/>
                                        健康产业必将成为未来的朝阳产业，而酒店加盟事业···</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="btn">查看更多</div>
  </div>
</template>

<script>
export default {
  name: 'Information',
  data () {
    return {
      
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
.information{
    position: relative;
    margin: 0 auto;
    height: auto;
    width: 62%;
    margin-top: 120px;
}
.information .title{
    font-size: 44px;     
}
.information .line{
    margin-top: 40px;
    border-bottom: 2px solid #9d2222;
    width: 120px;
}
.information .content{
    margin-top: 30px;
    font-size: 14px;
    line-height: 26px;
}
.information .content p{
    /* text-indent: 28px; */
    margin: 0;
    color: #777777;
}
.information .info{
    position: relative;
    margin-top: 100px;
    overflow: hidden;
    zoom: 1;
}
.information .info .left{
    float: left;
}
.information .info .right{
    float: left;
    margin-left: 60px;
}
.information .info .right .part{
    width: 100%;
    height: auto;
    overflow: hidden;
    zoom: 1;
}
.information .info .right .part .date{
    float: left;
}
.information .info .right .part .date .day{
    width: 72px;
    height: 62px;
    background: #59559a;
    border-radius: 50px;
    text-align: center;
    line-height: 62px;
    font-size: 24px;
    color: #fff;
}
.information .info .right .part .date .month{
    margin-top: 10px;
    font-size: 14px;
    text-align: center;
    color: #777777;
}
.information .info .right .part .part-content{
    float: left;
    margin-left: 30px;
}
.information .info .right .part .part-content .tip{
    font-size: 11px;
    font-weight: bold;
    color: #9d2222;
}
.information .info .right .part .part-content .small-title{
    margin-top: 20px;
    font-size: 16px;
    font-weight: bold;
}
.information .info .right .part .part-content p{
    margin-top: 30px;
    text-indent: 28px;
    font-size: 14px;
    line-height: 28px;
    color: #777;
}
.information .info .right .part-line{
    margin-top: 30px;
    margin-bottom: 50px;
    border-bottom: 2px solid #f7f7f7;
    width: 100%;
}
.information .btn{
    margin: 92px auto 0;
    width: 194px;
    height: 50px;
    border: 2px solid #9b2325;
    border-radius: 50px;
    line-height: 50px;
    text-align: center;
    font-size: 18px;
}
</style>