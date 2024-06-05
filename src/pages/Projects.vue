<script>
import {store} from '../data/store'
import axios from 'axios'
import Paginator from '../components/partials/Paginator.vue'
import Loader from '../components/partials/Loader.vue'

    export default {
        data(){
            return{
                projects: [],
                paginatorData: {},
                loading: true
            }
        },

        components:{
            Paginator,
            Loader
        },

        methods:{

            getApi(apiUrl, type){
                this.loading = true;
                axios.get(apiUrl + type)
                .then(result =>{
                    this.loading = false;
                    this.projects = result.data.data;
                    this.paginatorData.current_page = result.data.current_page;
                    this.paginatorData.links = result.data.links;
                    this.paginatorData.total = result.data.total;
                })
                .catch(error =>{
                    this.loading = false;
                    console.log(error.message);
                })
            }
        },

        mounted(){
            this.getApi(store.apiUrl, 'projects');
        }
    }
</script>

<template>
    <div>
        <h1>Projects</h1>

        <!-- loader -->
        <div v-if="loading">
            <Loader />
        </div>
        
        <div class="container d-flex flex-wrap">
            <div class="row row-cols-3">
                <div v-for="project in projects" :key="project.id" class="col">
                    <!-- card -->
                    <router-link :to="{name: 'projectDetail', params:{slug: project.slug}}" class="card">
                        <div class="content">
                            <div class="d-flex align-items-center">
                                <!-- svg -->
                                <svg
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                    d="M20 9V5H4V9H20ZM20 11H4V19H20V11ZM3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM5 12H8V17H5V12ZM5 6H7V8H5V6ZM9 6H11V8H9V6Z"
                                    ></path>
                                </svg>
                                <!-- title -->
                                <div>
                                    <h3>{{ project.title }}</h3>
                                </div>
                            </div>
                            <p class="para">
                            {{ project.type.title }}
                            </p>
                        </div>
                    </router-link>
                </div>
            </div>
            
            <!-- paginator -->
            <Paginator v-if="!loading" :data="paginatorData" @callApi="getApi"/>
            
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

h3{
    font-size: 1.4rem;
    margin: 0;
    margin-left: 8px;
    text-transform: capitalize;
}

.col{
    padding: 40px 30px;
}

a{
    text-decoration: none;
}

.card {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 320px;
    border-radius: 24px;
    line-height: 1.6;
    transition: all 0.48s cubic-bezier(0.23, 1, 0.32, 1);
    cursor: pointer;
}

.content {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
    padding: 36px;
    border-radius: 22px;
    color: #ffffff;
    overflow: hidden;
    background: $brown-primary;
    transition: all 0.48s cubic-bezier(0.23, 1, 0.32, 1);
}

.content::before {
    position: absolute;
    content: "";
    top: -4%;
    left: 50%;
    width: 90%;
    height: 90%;
    transform: translate(-50%);
    background: lighten($brown-primary, 23%);
    z-index: -1;
    transform-origin: bottom;

    border-radius: inherit;
    transition: all 0.48s cubic-bezier(0.23, 1, 0.32, 1);
}

.content::after {
    position: absolute;
    content: "";
    top: -8%;
    left: 50%;
    width: 80%;
    height: 80%;
    transform: translate(-50%);
    background:  lighten($brown-primary, 32%);
    z-index: -2;
    transform-origin: bottom;
    border-radius: inherit;
    transition: all 0.48s cubic-bezier(0.23, 1, 0.32, 1);
}

.content svg {
    width: 48px;
    height: 48px;
}

.content .para {
    z-index: 1;
    opacity: 1;
    font-size: 18px;
    transition: all 0.48s cubic-bezier(0.23, 1, 0.32, 1);
}

.content .link {
    z-index: 1;
    color: #fea000;
    text-decoration: none;
    font-family: inherit;
    font-size: 16px;
    transition: all 0.48s cubic-bezier(0.23, 1, 0.32, 1);
}

.content .link:hover {
    text-decoration: underline;
}

.card:hover {
    transform: translate(0px, -16px);
}

.card:hover .content::before {
    rotate: -8deg;
    top: 0;
    width: 100%;
    height: 100%;
}

.card:hover .content::after {
    rotate: 8deg;
    top: 0;
    width: 100%;
    height: 100%;
}


</style>