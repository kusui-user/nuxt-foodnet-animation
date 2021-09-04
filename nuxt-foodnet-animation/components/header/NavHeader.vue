<template>
  <header v-bind="$attrs" class="nav-header">
 
    <div class="container">
      <nuxt-link to="/" class="logo"><Svgs /> </nuxt-link>
      <button class="menu" @click="$emit('clickMenu')" />
    </div>
  </header>
</template>

<script>
import Svgs from "~/components/Svgs.vue";

export default {
  components: {
    Svgs,
  },
};
</script>


<style lang="scss" scoped>
.nav-header {
  padding: 0 18px;

  > .container {
    display: flex;
    justify-content: space-between;

    > .menu {
      position: relative;
      display: flex;
      width: 76px;
      height: 45px;
      padding: 0;
      border: none;
      background-color: transparent;

      &::before,
      &::after {
        content: "";
        position: absolute;
        right: 50%;
        bottom: 50%;
        width: 32px;
        height: 2px;
        background-color: white;
        transition: width 0.16s cubic-bezier(0.11, 0, 0.5, 0),
          transform 0.24s cubic-bezier(0.11, 0, 0.5, 0);
      }

      &::before {
        transform: translate(50%, 50%) translateY(-5px);
      }

      &::after {
        transform: translate(50%, 50%) translateY(5px);
      }

      &:hover {
        &::before,
        &::after {
          width: 24px;
        }
      }
    }
  }

  &.header-open {
    > .container {
      > .menu {
        &::before {
          transform: translate(50%, 50%) rotate(-45deg);
        }

        &::after {
          transform: translate(50%, 50%) rotate(45deg);
        }
      }
    }
  }
}
</style>