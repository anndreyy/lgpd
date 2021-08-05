<template>
  <div id="Home">

    <div class="container">

      <navbar />

      <headline />

      <div id="selector">
        <button role="button" :class="{selected: selected == 'LGPD'}" @click="selected = 'LGPD'"><span class="text">LGPD</span></button>
        <button role="button" :class="{selected: selected == 'GRPD'}" @click="selected = 'GRPD'"><span class="text">GRPD</span></button>
      </div>


      <lgpd v-if="selected == 'LGPD'" />

      <Grpd v-if="selected == 'GRPD'" />
    </div>

    <Footer />

  </div>
</template>

<script>
import Footer from '../components/Footer.vue'
import Headline from '../components/Headline.vue'
import Navbar from '../components/Navbar.vue'
import Lgpd from '../components/Lgpd'
import Grpd from '../components/Grpd'

export default {
  name: 'Home',
  components: {
    Navbar,
    Headline,
    Footer,
    Lgpd,
    Grpd
  },
  data: () => ({
    selected: "LGPD"
  })
}
</script>
