<template>
  <div class="layout-default">
    <DeskNavMenu />

    <Header />

    <transition mode=”out-in”>
      <Nuxt />
    </transition>

    <Footer />
  </div>
</template>

<style lang="scss" scoped>
.layout-default {
  position: relative;
  min-height: 100vh;
  max-width: 1400px;

  // .page-enter {
  //   opacity: 0;
  // }
  // .page-enter-active {
  //   transition: opacity 2s;
  // }

.v-enter {
  transform: translate(0, -20px);
  opacity: 0.8;
}
.v-enter-to {
  opacity: 1;
}
.v-enter-active {
  transition: all 1s 0s ease;
}
.v-leave {
  transform: translate(0, 0);
  opacity: 1;
}
.v-leave-to {
  transform: translate(0, 20px);
  opacity: 0;
}
.v-leave-active {
  transition: all .5s 0s ease;
}
  
  
}
</style>
