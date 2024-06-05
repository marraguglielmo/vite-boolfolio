<script>
import axios from 'axios';
import { store } from '../data/store';
import Loader from '../components/partials/Loader.vue';

    export default {
        name: 'ProjectDetail',
        
        data(){
            return{
                project: {},
                loading: true
            }
        },

        components:{
            Loader
        },

        methods:{
            getApi(){
                this.loading = true;
                console.log(this.$route.params.slug);
                const slug = this.$route.params.slug;
                axios.get(store.apiUrl + 'project-by-slug/' + slug)
                .then(result =>{
                        this.loading = false;
                        this.project = result.data.project
                        console.log(this.project);
                    })
                    .catch(error =>{
                        this.loading = false;
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
        <div v-if="loading" class="my-5">
            <Loader />
        </div>

        
        <div v-else class="text-center">
            <h1>{{ project.title }}</h1>
            <p>
                <a :href="project.github_url">{{ project.github_url }}</a>
            </p>
            <div v-for="technology in project.technologies" :key="technology.id">
                {{ technology.title }}
            </div>
        </div>
    </div>
    
</template>

<style lang="scss" scoped>

h1{
    text-transform: capitalize;
}

</style>