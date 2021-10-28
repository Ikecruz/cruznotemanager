<template>
    <section class="contain d-flex justify-content-center align-items-center">
        <div class="header-container px-4">
            <h1 class="text-white">{{placeholder}}</h1>
        </div>
    </section>
</template>

<script>
export default {
    name: "Hero",
    props: [
        'placeholder',
    ]
}
</script>

<style scoped>
.contain{
    min-height: 300px;
    background: #151520;
}
.header-container{
    width: 700px;
    text-align: center;
}
</style>