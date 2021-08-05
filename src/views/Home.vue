<template>
  <div class="home">

    <navbar />

    <headline />

    <div id="selector">
      <button role="button"><span class="text">LGPD</span></button>
      <button role="button"><span class="text">LGPD</span></button>
    </div>


    <lgpd />

    <Footer />

  </div>
</template>

<script>
import Footer from '../components/Footer.vue'
import Headline from '../components/Headline.vue'
import Navbar from '../components/Navbar.vue'
import Lgpd from '../components/Lgpd'

export default {
  name: 'Home',
  components: {
    Navbar,
    Headline,
    Footer,
    Lgpd
  }
}
</script>
