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
                    this.projects = result.data;
                    console.log(this.projects);
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
    </div>
</template>

<style lang="scss" scoped>

</style>