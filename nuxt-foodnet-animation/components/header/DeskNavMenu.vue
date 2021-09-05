<template>
  <aside class="desk-nav-menu">
    <div class="container">
      <div class="companylogo">
        <nuxt-link to="/" >
          <Svgs />
        </nuxt-link>
      </div>
      <nav class="pages">
        <nuxt-link to="/" class="page">
          <span class="page-txt">ホーム</span>
        </nuxt-link>
        <nuxt-link to="/content" class="page">
          <span class="page-txt">事業内容</span>
        </nuxt-link>
        <nuxt-link to="/company" class="page">
          <span class="page-txt">会社概要</span>
        </nuxt-link>
        <nuxt-link to="/contact" class="page">
          <span class="page-txt">お問合せ</span>
        </nuxt-link>
        <nuxt-link to="/online-shop" class="page">
          <span class="page-txt">online shop</span>
        </nuxt-link>
      </nav>
    </div>
  </aside>
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
.desk-nav-menu {
  box-shadow: 1px 1px 10px $color-white;
  position: fixed;
  top: 0;
  z-index: 5000;

  width: 100%;
  max-width: 1400px;
  height: 50px;
  display: none;
  background-color: $color-backbase;
  @include target600() {
    display: block;
    // justify-content: space-between;
    opacity: 0.8;
  }
  > .container {
    display: flex;
    justify-content: space-between;

    & .companylogo {
      padding-top: 6px;
      margin: 0 auto;
      // line-height: 50px;
      flex-basis: 20%;
    }

    & .pages {
      flex-basis: 70%;
      display: flex;

      > .page {
        padding: 16px 6px 0px 24px;
        font-size: 13px;
        color: $color-white;
        font-weight: 500;
        text-shadow: 1px 1px 1px rgb(9, 9, 9);
        line-height: 1.3em;
        letter-spacing: 0.04em;
        @include target960(){
          font-size: 17px;
          padding: 16px auto
        }

        > .page-txt {
          position: relative;
          display: inline-block;
          white-space: nowrap;

          &::before {
            content: "";
            position: absolute;
            bottom: -3px;
            left: 1px;
            display: block;
            width: 0;
            height: 1px;
            background-color: $color-white;
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