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
    height: 8vh;
    max-width: 1400px;
    background: rgb(10, 10, 10);
    color: white;
    text-align: center;
    line-height: 8vh;
  }
}

</style>
