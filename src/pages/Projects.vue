<script>
import {store} from '../data/store'
import axios from 'axios'

    export default {
        data(){
            return{
                projects: []
            }
        },

        components:{

        },

        methods:{
            getApi(){
                axios.get(store.apiUrl)
                .then(result =>{
                    console.log(result.data);
                    this.projects = result.data.data;
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
    <div>
        <h1>Projects</h1>
        <div class="container">
            <ul>
                <li v-for="project in projects" :key="project.id">
                    {{ project.id }}.
                    {{ project.title }}
                </li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>