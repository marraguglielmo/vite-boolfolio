<script>
import Header from './components/Header.vue';

  export default {
    data(){
      return{
      }
    },
    
    components:{
      Header
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
  
  
  
  
  <!-- <div class="projects-container">
    <h1 class="text-center fw-semibold my-4">lista progetti</h1>
    <div class="row row-cols-4 m-0">

      <div v-for="project in projects" :key="project.id">
        <ProjectCard :project="project"/>
      </div>
    </div>
  </div> -->
</template>


<style lang="scss" scoped>

</style>