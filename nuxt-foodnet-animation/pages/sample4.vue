<template>
  <div class="content-top fade-three">
    <!-- <DeskNavMenu /> -->
    <top-img>
      <div class="img-txt">sample</div>
    </top-img>

    <div class="content-main target-seven">
      <div class="content-main-one">
        <div id="fv_wap" class="fv_wap">
          <div class="fv_slide fv_slide_top"></div>
          <div class="fv_slide fv_slide_right"></div>
          <div class="fv_slide fv_slide_bottom"></div>
          <div class="fv_slide fv_slide_left"></div>
          <a id="fv_slide_inner" class="fv_slide_inner" href="#">
            <figure id="fv_slide_fig" class="fv_slide_fig">
              <img
                src="https://marcatcube.com/web_memo/wp-content/themes/miho_original/img/index/bg_img.jpg"
              />
            </figure>
            <div class="fv_slide_item_wap">
              <h1 class="fv_slide_item">Nature</h1>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import gsap from "gsap";
export default {
  mounted() {
    gsap.to(".fv_slide_top", 0.8, {
      left: "0%",
      delay: 1.2,
      ease: Expo.ease,
    });
    gsap.to(".fv_slide_right", 0.8, {
      top: 0,
      delay: 1.2,
      ease: Expo.ease,
    });
    gsap.to(".fv_slide_bottom", 0.8, {
      right: "0%",
      delay: 1.2,
      ease: Expo.ease,
    });
    gsap.to(".fv_slide_left", 0.8, {
      bottom: 0,
      delay: 1.2,
      ease: Expo.ease,
    });
    gsap.to(".fv_slide_fig", 0.6, {
      opacity: 1,
      delay: 0.5,
    });
    gsap.to(".fv_slide_item_wap", 0.6, {
      opacity: 1,
      delay: 0.5,
    });
    gsap.to(".fv_slide_item", 0.25, {
      opacity: 1,
      delay: 0.4,
      ease: Expo.ease,
    });
    gsap.to(".fv_slide_item img", 0.25, {
      filter: "grayscale(0%)",
      delay: 0.85,
      ease: Expo.ease,
    });
  },
};
</script>

<style lang="scss" scoped>
.content-main {
  margin: 30px auto;
  width: 60%;
  text-align: left;

  .content-main-one {
    margin: 80px 0;
  }

  #fv_wap {
    position: relative;
    width: 55vw;
    height: 30vw;
    overflow: hidden;
    margin: 0 auto;
  }
  .fv_slide {
    position: absolute;
  }
  .fv_slide_top {
    width: 100%;
    height: 15vw;
    left: -150%;
    top: 0%;
    background-color: rgba(105, 100, 110, 0.8);
    z-index: 1;
  }
  .fv_slide_right {
    width: 50%;
    height: 30vw;
    right: 0%;
    top: -150%;
    background-color: rgba(215, 146, 139, 0.2);
    z-index: 2;
  }
  .fv_slide_bottom {
    width: 100%;
    height: 15vw;
    right: -150%;
    bottom: 0%;
    background-color: rgba(102, 138, 120, 0.8);
    z-index: 3;
  }
  .fv_slide_left {
    width: 50%;
    height: 30vw;
    left: 0%;
    bottom: -150%;
    background-color: rgba(240, 220, 194, 0.4);
    z-index: 4;
  }
  .fv_slide_inner {
    display: block;
    height: 100%; //
  }
  .fv_slide_fig {
    height: 100%;
    opacity: 0;
  }
  .fv_slide_inner:hover img {
    filter: grayscale(0%);
  }
  .fv_slide_item_wap {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    z-index: 5;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: all 0.6s ease 0s;
  }
  .fv_slide_item {
    padding: 2% 5%;
    margin: 0 auto;
    background-color: rgba(255, 255, 255, 0.9);
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
    color: #000;
    text-align: center;
    transition: all 0.6s ease 0s;
    font-size: 2vw;
  }
  .fv_slide_inner:hover .fv_slide_item {
    background-color: rgba(255, 255, 255, 1);
    transform: scale(1.1, 1.1);
  }
}
</style>