<script>
import axios from 'axios';
import {store} from './data/store';
import ProjectCard from './components/ProjectCard.vue';

  export default {
    data(){
      return{
        projects: [],
      }
    },
    
    components:{
      ProjectCard
    },

    methods:{
      getApi(){
        axios.get(store.apiUrl)
        .then(result =>{
          this.projects = result.data
          console.log(this.projects);
        })
        .catch(error =>{
          console.log(error.message);
        })
      }
    },

    mounted(){
      this.getApi();
    }
  }
</script>

<template>
  <div class="projects-container">
    <h1 class="text-center fw-semibold my-4">lista progetti</h1>
    <div class="row row-cols-4 m-0">

      <div v-for="project in projects" :key="project.id">
        <ProjectCard :project="project"/>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>

</style>