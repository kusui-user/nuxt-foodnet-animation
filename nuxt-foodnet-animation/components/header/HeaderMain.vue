<template>
  <div class="header-main">
    <div class="c-video">
      <video
        class="c-video__embed"
        <!-- src="~/assets/video/Finalmv2vel1.mp4" -->
        width="1440"
        height="810"

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
  // height: 100%;
 height: 350px;
 @include target600() {
      //  display: none;
      height: 100%;
    }

  & .c-video{
  position: relative;
  width: 100%;
  height: 100%;

  &__embed{
    display: block;
    width: 100%;
    height:100%;
    object-fit: cover;
  }
}


}
</style>