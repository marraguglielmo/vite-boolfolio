<script>
import axios from 'axios';
import { store } from '../data/store';
import Loader from '../components/partials/Loader.vue';

    export default {

        data(){
            return{
                technologies: [],
                types: [],
                loading : true
            }
        },

        components:{
            Loader
        },
        
        methods:{

            getApi(apiUrl, type = ''){
                this.loading = true;
                axios.get(apiUrl + type)
                .then(result =>{
                    this.loading = false;
                    switch (type) {
                        case 'technologies':
                            this.technologies = result.data;
                            break;
                            case 'types':
                                this.types = result.data;
                        // default:
                        //     break;
                    }
                })
                .catch(error =>{
                    this.loading = false;
                    console.log(error.message);
                })
            }
            
        },

        mounted(){
            this.getApi(store.apiUrl, 'types')
            this.getApi(store.apiUrl, 'technologies')
        }
    }
</script>

<template>
    <div>
        <h1>Skills</h1>

        <div v-if="loading">
            <Loader />
        </div>
        
        <div v-else class="container">
            
            <!-- technologies -->
            <div class="row row-cols-3 m-0 p-0 justify-content-center">
                <div v-for="technology in technologies" :key="technology.id" class="col">
                    <div class="ag-courses_item">
                        <a href="#" class="ag-courses-item_link">
                            <div class="ag-courses-item_bg"></div>

                            <div class="ag-courses-item_title m-0 d-flex align-items-center justify-content-center">
                                {{ technology.title }}
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            <div class="line my-5"></div>

            <!-- types -->
            <div class="row row-cols-3 m-0 p-0 justify-content-center">
                <div v-for="type in types" :key="type.id" class="col">
                    <div class="ag-courses_item">
                        <a href="#" class="ag-courses-item_link">
                            <div class="ag-courses-item_bg"></div>

                            <div class="ag-courses-item_title m-0 d-flex align-items-center justify-content-center">
                                {{ type.title }}
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            
            
        </div>
        
    </div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

.row{
    .col{
        padding: 15px 15px;
    }
}

.ag-courses_item {
    -ms-flex-preferred-size: calc(33.33333% - 30px);
    flex-basis: calc(33.33333% - 30px);

    overflow: hidden;

    border-radius: 28px;
    a{
        text-decoration: none;
    }
}
.ag-courses-item_link {
    display: block;
    padding: 30px 20px;
    background-color: $dark;

    overflow: hidden;

    position: relative;
}
.ag-courses-item_link:hover,
.ag-courses-item_link:hover .ag-courses-item_date {
    text-decoration: none;
    color: #FFF;
}
.ag-courses-item_link:hover .ag-courses-item_bg {
    -webkit-transform: scale(10);
    -ms-transform: scale(10);
    transform: scale(10);
}
.ag-courses-item_title {
    min-height: 87px;
    margin: 0 0 25px;

    overflow: hidden;

    font-weight: bold;
    font-size: 30px;
    color: #FFF;

    z-index: 2;
    position: relative;
}
.ag-courses-item_bg {
    height: 128px;
    width: 128px;
    background-color: $brown-primary;

    z-index: 1;
    position: absolute;
    top: -75px;
    right: -75px;

    border-radius: 50%;

    -webkit-transition: all .5s ease;
    -o-transition: all .5s ease;
    transition: all .5s ease;
}
.ag-courses_item:nth-child(2n) .ag-courses-item_bg {
    background-color: #3ecd5e;
}
.ag-courses_item:nth-child(3n) .ag-courses-item_bg {
    background-color: #e44002;
}
.ag-courses_item:nth-child(4n) .ag-courses-item_bg {
    background-color: #952aff;
}
.ag-courses_item:nth-child(5n) .ag-courses-item_bg {
    background-color: #cd3e94;
}
.ag-courses_item:nth-child(6n) .ag-courses-item_bg {
    background-color: #4c49ea;
}



@media only screen and (max-width: 979px) {
    .ag-courses_item {
    -ms-flex-preferred-size: calc(50% - 30px);
    flex-basis: calc(50% - 30px);
    }
    .ag-courses-item_title {
    font-size: 24px;
    }
}

@media only screen and (max-width: 767px) {
    .ag-format-container {
    width: 96%;
    }

}
@media only screen and (max-width: 639px) {
    .ag-courses_item {
    -ms-flex-preferred-size: 100%;
    flex-basis: 100%;
    }
    .ag-courses-item_title {
    min-height: 72px;
    line-height: 1;

    font-size: 24px;
    }
    .ag-courses-item_link {
    padding: 22px 40px;
    }
}

// line
.line{
    border-top: 5px solid $dark;
    border-radius: 50px;
    opacity: .9;
}

</style>