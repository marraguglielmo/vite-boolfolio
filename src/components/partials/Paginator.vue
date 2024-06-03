<script>
    export default {
        props:{
            data: Object
        },

        methods:{
            callApi(link){
                this.$emit('callApi', link)
            }
        }
    }
</script>

<template>

    <div class="paginator">
        <button
            v-for="link in data.links"
            :key="link.label"
            v-html="link.label"
            :disabled="!link.url"
            @click="callApi(link.url)"
        > 
        </button>
    </div>
    
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/variables' as *;

.paginator{
    width: 100%;
    display: flex;
    justify-content: center;
    button{
        background-color: white;
        padding: 8px 12px;
        margin: 0 5px;
        border: 1px solid transparent;
        border-radius: 5px;
        outline: none;
        transition: background-color .2s;
        &:hover{
            background-color: rgba(180, 158, 129, 0.26);
            background-size: auto;
            background-position: left top;
            background-repeat: repeat;
        }
    }
}


</style>