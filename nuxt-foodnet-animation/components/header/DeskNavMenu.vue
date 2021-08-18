<template>
  <aside class="desk-nav-menu">
    <div class="container">
      <nav class="pages" >
        <nuxt-link to="/" class="page">
          <span class="page-txt">TOP</span>
        </nuxt-link>
        <nuxt-link to="/about" class="page">
          <span class="page-txt">ABOUT</span>
        </nuxt-link>
        <nuxt-link to="/news" class="page">
          <span class="page-txt">NEWS</span>
        </nuxt-link>
        <nuxt-link to="/works" class="page">
          <span class="page-txt">WORKS</span>
        </nuxt-link>
        <nuxt-link to="/contact" class="page">
          <span class="page-txt">CONTACT</span>
        </nuxt-link>
        <a href="https://amity-sensei.stores.jp/" target="_blank" class="page">
          <span class="page-txt">SHOP</span>
        </a>
      </nav>
      
    </div>
  </aside>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.desk-nav-menu {
  position: absolute;
  top: 0;
  z-index: 5000;

  width: 100%;
  height: 60px;
  display: none;
  @include target600() {
      justify-content: center;
    }
  > .container {
    > .pages {
         display: flex;
         
      > .page {    
        padding: 10px 16px;
        font-size: 16px;
        color: rgb(31, 29, 29);
        line-height: 1.2em;
        letter-spacing: 0.08em;

        > .page-txt {
          position: relative;
          display: inline-block;
          white-space: nowrap;

          &::before {
            content: '';
            position: absolute;
            bottom: -3px;
            left: 1px;
            display: block;
            width: 0;
            height: 1px;
            background-color: rgb(32, 29, 29);
            transition: all 0.24s cubic-bezier(0.11, 0, 0.5, 0);
          }
        }

        &:hover,
        &.page-active,
        &.nuxt-link-exact-active {
          > .page-txt {
            &::before {
              width: calc(100% - 2px);
            }
          }
        }
      }
    }


  }
}
</style>