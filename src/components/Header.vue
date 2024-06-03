<script>
    export default {
        
    }
</script>

<template>

    <header>
        <div class="container">
            <div class="navbar">
                <ul>
                    <li><router-link :to="{name: 'home'}">Home</router-link></li>
                    <li><router-link :to="{name: 'projects'}">Progetti</router-link></li>
                    <li><router-link :to="{name: 'about'}">Chi sono</router-link></li>
                </ul>
            </div>
        </div>
    </header>

</template>

<style lang="scss" scoped>

</style>