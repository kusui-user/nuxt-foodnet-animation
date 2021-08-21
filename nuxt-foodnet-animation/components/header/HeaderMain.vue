<template>
  <div class="header-main">
    <div class="c-video">
      <video
        class="c-video__embed"
        src="~/assets/video/v-sample2.mp4"
        width="1440"
        height="810"
        loop
        autoplay
        muted
        playsinline
      ></video>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header-main {
  width: 100%;
  height: 100vh;
  background-color: $color-backbase;
  overflow: hidden;

  & .c-video{
  position: relative;
  width: 100%;
  height: 80%;

  &__embed{
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
}
</style>