<template>
  <div class="layout-default">
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<style lang="scss" scoped>
.layout-default {
  position: relative;
  min-height: 100vh;
  overflow-x: hidden;
  max-width: 1400px;

  .header {
    height: 90vh;
    background: transparent;
  }

  .footer {
    height: 5%;
    background: $color-backbase;
    color: white;
    text-align: center;
    line-height: 8vh;
  }
}
</style>
