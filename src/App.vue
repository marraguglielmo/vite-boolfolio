<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue'

  export default {
    data(){
      return{
      }
    },
    
    components:{
      Header,
      Footer
    },

    methods:{
    },

    mounted(){
    }
  }
</script>

<template>
  <Header />


  <div class="container">

    <router-view></router-view>
    
  </div>
  
  <Footer />
  
</template>


<style lang="scss" scoped>

</style>