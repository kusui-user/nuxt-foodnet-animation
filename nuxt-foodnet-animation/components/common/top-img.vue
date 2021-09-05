<template>
  <div class="header-main">
    <div class="img-ctn">
      <transition name="home">
        <slot />
      </transition>

      <img src="~/assets/images/home-image.jpg" alt="" class="img-pic" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header-main {
  width: 100%;
  height: 60vh;
  overflow: hidden;

  & .img-ctn {
    position: relative;
    width: 100%;
    height: 100%;

    .img-pic {
      width: 100%;
      height: 100%;
      object-fit: cover;
      z-index: 500;
    }
  }
}

.img-txt {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 30px;
  letter-spacing: 0.2em;
  color: white;
  text-shadow: 2px 2px 2px rgb(9, 9, 9);
  white-space: nowrap;
  z-index: 1000;
  font-weight: 500;
}

.home-enter {
  transform: translate(0, -20px);
  opacity: 0.8;
}
.home-enter-to {
  opacity: 1;
}
.home-enter-active {
  transition: all 1s 0s ease;
}
// .home-leave {
//   transform: translate(0, 0);
//   opacity: 1;
// }
// .home-leave-to {
//   transform: translate(0, 20px);
//   opacity: 0;
// }
// .home-leave-active {
//   transition: all .5s 0s ease;
// }
</style>