<script>

    export default {
        data(){
            return{

            }
        },

        props:{
            project: Object
        },

        methods:{

        },

        mounted(){
            console.log(this.project);
        }
    }
</script>

<template>
    <div class="col px-3 py-2 h-100">
        <div class="gm_card border border-2 h-100">
            <div class="title">
                <h2>{{ project.title }}</h2>
            </div>
            <div class="type">
                {{ project.type.title }}
            </div>
            <div class="tech">
                <div v-for="technology in project.technologies" :key="technology.id">{{ technology.title }}</div>
            </div>
            <div class="github-url">
                <a :href="project.github_url">{{ project.github_url }}</a>
            </div>

        </div>
    </div>
</template>


<style scoped>

</style>