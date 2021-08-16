<template>
  <div class="header">
    <NavHeader :class="{ 'header-open': isMenu }" @clickMenu="clickMenu()" />

    <transition name="menu">
      <NavMenu v-show="isMenu" @clickCloseMenu="clickCloseMenu()" />
    </transition>

    <HeaderMain/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenu: false,
    }
  },
  watch: {
    $route() {
      this.isMenu = false
    },
  },
  methods: {
    clickMenu() {
      this.isMenu = !this.isMenu
    },
    clickCloseMenu() {
      this.isMenu = false
    },
  }, 
}
</script>

<style lang="scss" scoped>
.nav-header{
  position: fixed;
    top: 16px;
    right: 0;
    left: 0;
    z-index: 7000;

    @include target600() {
        display: none;
    }
}
.nav-menu{
   position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: calc(40% - 40px);
    max-width: 400px;
    min-width: 250px;
    z-index: 6000;
    @include target600() {
       display: none;
    }
}

 .menu-enter-active {
    transition: all 0.56s cubic-bezier(0, 0.55, 0.45, 1);
  }

    .menu-leave-active {
    transition: all 0.4s cubic-bezier(0.5, 1, 0.89, 1);
  }

  .menu-enter,
  .menu-leave-to {
    transform: translateX(100%);
  }

  .menu-enter-to,
  .menu-leave {
    transform: translateX(0);
  }


</style>