<template>
  <div class="layout-default">
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<style lang="scss" scoped>
.layout-default{
  position: relative;
  min-height: 100vh;
  overflow-x: hidden;

  .header{
    height: 80vh;
    max-width: 1400px;
    background: transparent;
    
  }

  .footer{
    height: 10vh;
    max-width: 1400px;
    background: rgb(186, 226, 43);
  }
}

</style>
