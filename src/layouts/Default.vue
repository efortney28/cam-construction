<template>
  <div class="layout">
    <header class="header">
      <Navbar />
    </header>
    <slot/>
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
export default {
  components: {Navbar},
  
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
