<template>
  <div class="content-top fade-three">
    <!-- <DeskNavMenu /> -->
    <top-img>
      <div class="img-txt">sample</div>
    </top-img>

    <div class="content-main target-seven">
      <div class="content-main-one">
        <div class="data-item ratio">
          <div class="block_img">
            <div class="ratioImg type01">
              <p>1</p>
            </div>
            <div class="ratioImg type02">
              <p>2</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {


    const scene = this.$scrollmagic.scene({
      triggerElement: ".data-item.ratio",
    })
    this.secne.on("enter", function (event) {
      $(".data-item.ratio .ratioImg").addClass("active");
    });
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

  .block_img {
    text-align: center;
    width: 100%;
    .ratioImg {
      margin: 1%;
      width: 160px;
      transition: 0.4s;
      transform: scale(0);
      display: inline-block;
      vertical-align: middle;
      &.active {
        transform: scale(1);
      }
      &.type02 {
        transition-delay: 0.4s; // ここがポイント！！
      }
      p {
        text-align: center;
        font-size: 60px;
        border: 4px solid #000;
        border-radius: 50%;
        width: 160px;
        height: 160px;
        line-height: 145px;
        position: relative;
      }
    }
  }
}
</style>