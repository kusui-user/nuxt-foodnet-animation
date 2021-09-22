<template>
  <div class="content-top fade-three">
    <!-- <DeskNavMenu /> -->
    <top-img>
      <div class="img-txt">sample</div>
    </top-img>

    <div class="content-main target-seven">
      <div class="content-main-one">
        <div class="copy" id="trigger">
          <div class="copy__line">
            <span class="copy__t">テ</span>
            <span class="copy__t">キ</span>
            <span class="copy__t">ス</span>
            <span class="copy__t">ト</span>
            <span class="copy__t">が</span>
          </div>
          <div class="copy__line">
            <span class="copy__t">一</span>
            <span class="copy__t">文</span>
            <span class="copy__t">字</span>
            <span class="copy__t">ず</span>
            <span class="copy__t">つ</span>
            <span class="copy__t">表</span>
            <span class="copy__t">示</span>
          </div>
          <div class="copy__line">
            <span class="copy__t">さ</span>
            <span class="copy__t">れ</span>
            <span class="copy__t">ま</span>
            <span class="copy__t">す</span>
            <span class="copy__t">。</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
  // let controller = new ScrollMagic.Controller();

  const scene = this.$scrollmagic.scene({
    triggerElement: "#trigger",
    triggerHook: 1,
    offset: 250,
  })
    .to(".copy__t",1,
        { //初期状態
          opacity: 0,
          scale: 5,
          rotation: 10,
          x: 150,
          y: -100,
        },
  
      )
    
    // .addIndicators()
    .reverse(false)
    // .addTo(controller);
    // controllerに追加
    this.$scrollmagic.addScene(scene);
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

  .copy__t {
    font-size: 80px;
    font-weight: bold;
    opacity: 1;
    display: inline-block;
    color: red;
  }
}
</style>