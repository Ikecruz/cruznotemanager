<template>
    <div class="home">
        <Hero placeholder="Cruz Note Manager" />
        <Write />
    </div>
</template>

<script>
// @ is an alias to /src
import Hero from '@/components/Hero.vue'
import Write from'@/components/Write.vue'

export default {
    name: 'Home',
    components: {
        Hero,
        Write
    }
}
</script>
