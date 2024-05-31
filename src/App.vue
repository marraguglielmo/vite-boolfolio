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
          // console.log(this.projects);
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
  <div>
    <h3>lista progetti</h3>
    <ul>
      <li><ProjectCard /></li>
    </ul>
  </div>
</template>


<style lang="scss" scoped>

</style>