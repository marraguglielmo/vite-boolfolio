<script>
    export default {
        
    }
</script>

<template>

<div class="loader">
    <div class="inner_loader"></div>
</div>
    
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/variables' as *;

.loader {
    width: 200px;
    height: 10px;
    background: $brown-primary;
    border-radius: 50px;
    overflow: hidden;
    margin: 0 auto;
}

.inner_loader {
    width: 60%;   
    height: 100%;
    background: darken($brown-primary, 35%);
    border-radius: 50px;
    animation: moveLeftRight 3s ease-in-out infinite;
}

@keyframes moveLeftRight {
    0% {
        transform: translateX(calc(-100% + 10px));
    }

    50% {
        transform: translateX(calc(200px - 10px));
    }

    100% {
        transform: translateX(calc(-100% + 10px));
    }
}

</style>