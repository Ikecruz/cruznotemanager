<template>
    <div class="home">
        <Navbar />
        <Hero placeholder="CruzNotes Note Manager" />
        <Write />
        <Footer />
    </div>
</template>

<script>
// @ is an alias to /src
import Hero from '@/components/Hero.vue'
import Navbar from '@/components/Navbar.vue'
import Write from'@/components/Write.vue'
import Footer from '@/components/Footer.vue'

export default {
    name: 'Home',
    components: {
        Hero,
        Write,
        Navbar,
        Footer
    }
}
</script>
