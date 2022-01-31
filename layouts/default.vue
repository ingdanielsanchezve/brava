<template>
  <div>
    <Navbar />
    <section class="main-content">

      <div class="container">
        <Nuxt />
      </div>
    </section>

    <Footer />
  </div>
</template>

<script>

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default {
  name: 'DefaultLayout',
  components: {
    Navbar,
    Footer
  }
}
</script>

<style lang="scss">
.html {
  height: 100%;
  overflow: hidden;
}

.main-content {
  background: #EEEEEE;
  height: 90vh;
}
</style>