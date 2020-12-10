<template>
  <div class="layout">
    <header class="header">
      <Navbar />
    </header>
    <slot/>
    <footer><PageFooter /></footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Navbar from '@/components/Navbar'
import PageFooter from '@/components/PageFooter'

export default {
  components: {Navbar, PageFooter},
  
}
</script>

<style>
@font-face {
  font-family: Poppins;
  src: url('../assets/Poppins-Regular.ttf');
  font-weight: 400;
}
@font-face {
  font-family: Poppins;
  src: url('../assets/Poppins-Medium.ttf');
  font-weight: 500;
}
@font-face {
  font-family: Poppins;
  src: url('../assets/Poppins-Light.ttf');
  font-weight: 300;
}
</style>
