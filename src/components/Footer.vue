<template>
  <div class="footer">
      <div class="footer-up">
          <div class="list">
              <div class="title">首页</div>
              <ul>
                  <li>热门活动</li>
                  <li>娱乐项目</li>
                  <li>景区特色</li>
              </ul>
          </div>
          <div class="list">
              <div class="title">景区特色</div>
              <ul>
                  <li><img src="/static/img/foot-xueshan.png" alt=""><span>雪山</span></li>
                  <li><img src="/static/img/foot-pubu.png" alt=""><span>瀑布</span></li>
                  <li><img src="/static/img/foot-richu.png" alt=""><span>日出</span></li>
                  <li><img src="/static/img/foot-xuehu.png" alt=""><span>雪湖</span></li>
              </ul>
          </div>
          <div class="list">
              <div class="title">食 · 住 · 行</div>
              <ul>
                  <li>特色美食</li>
                  <li>酒店客栈</li>
                  <li>交通线路</li>
              </ul>
          </div>
          <div class="list">
              <div class="title">娱 · 购 · 游</div>
              <ul>
                  <li>文化娱乐</li>
              </ul>
          </div>
          <div class="list">
              <div class="title">畅游指南</div>
              <ul>
                  <li>票价信息</li>
                  <li>交通指南</li>
                  <li>景区地图</li>
                  <li>常见问题</li>
                  <li>推荐行程</li>
                  <li>游玩须知</li>
                  <li>游玩攻略</li>
              </ul>
          </div>
          <div class="list">
              <div class="title">在线商城</div>
              <ul>
                  <li>景区门票</li>
                  <li>酒店客栈</li>
                  <li>景区特产</li>
                  <li>特色美食</li>
                  <li>个人中心</li>
                  <li>积分商城</li>
              </ul>
          </div>
          <div class="list">
              <div class="title">关于我们</div>
              <ul>
                  <li>景区介绍</li>
                  <li>景区风采</li>
                  <li>视频点播</li>
                  <li>人才招聘</li>
                  <li>联系我们</li>
                  <li>投诉建议</li>
              </ul>
          </div>
          <div class="list-code">
              <div class="code"><img src="/static/img/code.png" alt=""></div>
              <ul>
                  <li>咨询热线:029-89835181</li>
                  <li>售后电话:400-029-6628</li>
                  <li>公司官网:www.slzhly.com</li>
                  <li>办公地址:西安曲江新区金凤路838号1号楼5层501室</li>
                  <li>技术支持：西安丝路智慧旅游科技有限公司</li>
              </ul>
          </div>
      </div>
      <div class="footer-line"><img src="/static/img/footer-line.png" alt=""></div>
      <div class="footer-down">
            Powered by : 西安丝路智慧旅游科技有限公司 陕ICP备17010992号 当前使用Web模板：智慧景区"幻蓝新绿模板"
            <br/><span>Copyright ©丝路智旅</span>
            
      </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
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
    list-style: none;
}
.footer{
    position: relative;
    width: 100%;
    height: 500px;
    background: #275668;
    text-align: center;
    color: #fff;
}
.footer-up{
    position: absolute;
    left: 200px;
    top: 50px;
    overflow: hidden;
    zoom: 1;
}
.footer-up .list{
    float: left;
    margin-left: 50px;
}
.footer-up .list .title{
    margin-bottom: 26px;
    font-size: 18px;
}
.footer-up ul li{
    font-size: 16px;
    margin-top: 16px;
}
.footer-up .list li img{
    display: inline-block;
    margin-right: 10px;    
}
.footer-up .list-code{
    float: left;
    margin-left: 100px;
    text-align: left;
}
.footer-up .list-code .code{
    margin-bottom: 16px;
}
.footer-line{
    position: absolute;
    bottom: 102px;
    left: 50%;
    transform: translate(-50%,0);
}
.footer-down{
    position: absolute;
    bottom: 20px;
    font-size: 16px;
    left: 50%;
    transform: translate(-50%,0);
}
.footer-down span{
    display: inline-block;
    margin-top: 16px;
}
</style>