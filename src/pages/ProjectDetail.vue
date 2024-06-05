<script>
import axios from 'axios';
import { store } from '../data/store';

    export default {
        name: 'ProjectDetail',

        methods:{
            getApi(){
                // console.log(this.$route.params.slug);
                const slug = this.$route.params.slug;
                axios.get(store.apiUrl + 'post-by-slug' + slug)
                    .then(result =>{
                        console.log(result.data);
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
        <h1>Dettaglio progetto</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quidem placeat enim aliquid molestiae a rerum quibusdam excepturi, minus illo atque doloribus voluptates blanditiis nam optio eius mollitia unde natus!</p>
    </div>
</template>

<style lang="scss" scoped>

</style>