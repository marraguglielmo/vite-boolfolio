<script>
import ProjectCard from './components/ProjectCard.vue';

  export default {
    data(){
      return{
      }
    },
    
    components:{
      ProjectCard
    },

  }
</script>

<template>
  <div>
    <h3>lista progetti</h3>
    <ul>
      <ProjectCard />
    </ul>
  </div>
</template>


<style lang="scss" scoped>

</style>