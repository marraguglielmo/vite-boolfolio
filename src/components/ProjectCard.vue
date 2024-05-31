<script>
import axios from 'axios';
import {store} from '../data/store';


    export default {
        data(){
            return{
                projects: [],
            }
        },

        methods:{
            getApi(){
                axios.get(store.apiUrl)
                    .then(result =>{
                    this.projects = result.data;
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
    <div class="col">
        <div class="card_gm">
            <div class="title">{{ projects }}</div>
        </div>
    </div>
</template>


<style scoped>

</style>