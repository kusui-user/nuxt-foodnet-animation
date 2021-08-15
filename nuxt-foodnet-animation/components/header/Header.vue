<template>
  <div class="header">
    <NavHeader :class="{ 'header-open': isMenu }" @clickMenu="clickMenu()" />
    <NavMenu/>
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