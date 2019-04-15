<template>
  <div class="header">
    <div class="top">
        <div class="logo">
            <img src="/static/img/logo.png" alt="">
        </div>
        <div class="nav">
            <ul>
                <li><a href="/">HOME</a></li>
                <li><a href="/contentpage">FEATURES</a></li>
                <li><a href="javascript:;">WORKS</a></li>
                <li><a href="javascript:;">ABOUT</a></li>
                <li><a href="javascript:;">ITINERARY</a></li>
                <li><a href="javascript:;">ONLINE MALL</a></li>
                <li class="active"><a href="/aboutuspage">ABOUT US</a></li>
            </ul>
        </div>
        <div class="contact">
            <ul>
                <li><a href="javascript:;"><img src="/static/img/phone.png" alt=""></a></li>
                <li><a href="javascript:;"><img src="/static/img/weibo.png" alt=""></a></li>
                <li><a href="javascript:;"><img src="/static/img/weixin.png" alt=""></a></li>
            </ul>
        </div>
    </div>
    <div class="title">
        <div class="text">
            <img src="/static/img/text.png" alt="">
        </div>
        <div class="comment">
            <img src="/static/img/comment.png" alt="">
        </div>   
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
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
.header{
    position: relative;
    background: url(/static/img/about-bg.png) no-repeat;
    width: 100%;
    height: auto;
    height: 884px;
}
.top{
    position: relative;
    top: 0;
    height: 88px;
    line-height: 88px;
    background: #619ecd;
    opacity: 0.8;
}
.top .logo{
    position: absolute;
    display: inline-block;
    left: 190px; 
    top: 20px;
}
.top .nav{
    position: absolute;
    display: inline-block;
    left: 582px;
       
}
/* ul{
    margin: 0;
    padding: 0;
} */
.top .nav ul li{
    float: left;
    list-style: none;
    margin-right: 88px;
    height: 88px;
    line-height: 88px;
}
.nav ul li.active a{
    color: #eff82c;
}
ul li:last-child{
    margin: 0;
}
ul li a{
    text-decoration: none;
    font-size: 14px; 
    color: #fff;
}
.top .contact{
    position: absolute;
    right: 60px;   
}
.contact ul li{
    float: right;
    list-style: none;
    margin-left: 26px;
}
.title{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    animation:mymove 5s;
}
@keyframes mymove
{
	from {opacity: 0;}
	to {opacity: 1;}
}
.title .comment{
    margin-top: 46px;
    position: absolute;
    left: 50%;
    transform: translate(-50%,0);
}

</style>