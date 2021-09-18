<template>
  <div class="header-main">
    <div class="c-video">
      <video
        class="c-video__embed"
        :src="url"
        width="1440"
        height="810"
        autoplay
        muted
        playsinline
        v-on:load="load"
      ></video>
    </div>
  </div>
</template>

<script>
export default {
  Create() {
    this.$nuxt.$loading.start();

    setTimeout(() => this.$nuxt.$loading.finish(), 2000);
  },
  mounted() {
    this.$nuxt.$loading.start();

    setTimeout(() => this.$nuxt.$loading.finish(), 2000);
  },

  data() {
    return {
      url: require("~/assets/video/Finalmv2vel1.mp4"),
    };
  },
  methods: {
    // ※4
    load: function () {
      console.log("loaded");
      this.$nuxt.$loading.finish();
    },
  },
};
</script>

<style lang="scss" scoped>
.header-main {
  width: 100%;
  // height: 100%;
  height: 350px;
  @include target600() {
    //  display: none;
    height: 100%;
  }

  & .c-video {
    position: relative;
    width: 100%;
    height: 100%;

    &__embed {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>