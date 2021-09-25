<template>
  <div class="content-top fade-three">
    <!-- <DeskNavMenu /> -->
    <top-img>
      <div class="img-txt">sample</div>
    </top-img>

    <div class="content-main target-seven">
      <div class="content-main-one">
        <div id="fv_wap" class="fv_wap">
          <div class="fv_slide"></div>
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
import gsap from 'gsap'
export default {
  mounted() {
   gsap.to(".fv_slide", 0.8, {
  width: "120%",
  left: "120%",
  delay: 0.4,
  ease: Expo.ease
});
gsap.to(".fv_slide_fig", 0.6, {
  opacity: 1,
  delay: 0.5
});
gsap.to(".fv_slide_item_wap", 0.6, {
  opacity: 1,
  delay: 0.5
});
gsap.to(".fv_slide_item", 0.25, {
  opacity: 1,
  delay: 0.4,
  ease: Expo.ease
});
// gsap.to(".fv_slide_item img", 0.25, {
//   filter: "grayscale(0%)",
//   delay: 0.85,
//   ease: Expo.ease
// });
   
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
  width: 100%;
  height: 30vw;
  top: 0;
  left: -100%;
  z-index: 3;
  background-color: black;
  opacity: 1;
}

.fv_slide_inner {
  display: block;
  height: 100%;
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
  z-index: 2;
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
  transform: scale(1.1, 1.1);
}

.fv_slide_inner:hover .fv_slide_item {
  background-color: white;
}
}
</style>