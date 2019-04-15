<template>
  <div>
    <my-header></my-header>
    <my-news></my-news>
    <my-sight></my-sight>
    <my-guide></my-guide>
    <my-Information></my-Information>
    <my-Food></my-Food>
    <my-Footer></my-Footer>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
import myHeader from '../components/Header'
import myNews from '../components/News'
import mySight from '../components/Sight'
import myGuide from '../components/Guide'
import myInformation from '../components/Information'
import myFood from '../components/Food'
import myFooter from '../components/Footer'
export default {
  name: 'HomePage',
  data () {
    return {
      
    }
  },
  components:{
    myHeader,
    myNews,
    mySight,
    myGuide,
    myInformation,
    myFood,
    myFooter
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>