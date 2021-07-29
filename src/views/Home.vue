<template>
  <div class="home">

    <navbar />

    <headline />

    <Footer />

  </div>
</template>

<script>
import Footer from '../components/Footer.vue'
import Headline from '../components/Headline.vue'
import Navbar from '../components/Navbar.vue'

export default {
  name: 'Home',
  components: {
    Navbar,
    Headline,
    Footer
  }
}
</script>
