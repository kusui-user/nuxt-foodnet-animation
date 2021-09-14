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
      ></video>
    </div>
  </div>
</template>

<script>

export default {
   mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()

      setTimeout(() => this.$nuxt.$loading.finish(), 50000)
    })
  },
   loading: {
    continuous:true,
    color: 'blue',
    height: '5px'
  },

  data() {
    return {
      url: require("~/assets/video/Finalmv2vel1.mp4"),
    };
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