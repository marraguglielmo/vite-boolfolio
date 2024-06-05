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

        computed:{
            type(){
                if(!this.project.type.title){
                    return 'Nessun tipo'
                }
                return this.project.type.title;
            
            },
            technologies(){
                if(this.project.technologies.length === 0){
                    return 'Nessuna tecnologia'
                }
                return this.project.technologies.map(technology => technology.title).join(' - ');
            },
            formattedDate(){
                const date = new Date(this.project.updated_at)

                let options = {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'

                };
                
                return new Intl.DateTimeFormat(navigator.language, options).format(date);
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
                <a :href="project.github_url">{{ project.github_url ? project.github_url :'il link di Github non è disponibile' }}</a>
            </p>
            <div>
                {{ technologies }}
            </div>

            <div>
                {{ type }}
            </div>

            <div class="date my-4">
                {{ formattedDate }}
            </div>
        </div>
    </div>
    
</template>

<style lang="scss" scoped>

h1{
    text-transform: capitalize;
}

</style>