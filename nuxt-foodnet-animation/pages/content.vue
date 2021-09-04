<template>
  <div class="content-top fade-two">
    <!-- <DeskNavMenu /> -->
    <top-img>
      <div class="img-txt ">事業内容</div>
    </top-img>

    <div class="content-main">

      <div class="content-main-one target-five">
        <h1>卸売事業</h1>
        <hr />
        <p>業務用食材の卸売販売</p>
        <p>
          ・主な取り扱い食材：鶏肉加工品・畜産原料（牛・豚・鶏）、水産原料、冷凍野菜
          他
        </p>
      </div>

      <div class="content-main-one target-six">
        <h1>online shop</h1>
        <hr />
        <p>一般顧客・業者向けの通販サイトの運営</p>
        <p>・祭のおかずや</p>
        <p>・祭のおかずや　楽天市場店</p>
        <p >・いつもの　</p>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  mounted(){
    var tm = new TimelineMax();
    tm.staggerFrom(".target-five",0.5,{y: 300, ease:"elastic.out(1, 0.3)"});
    tm.staggerFrom(".target-six",0.5,{y: 300, ease:"elastic.out(1, 0.3)"});
    const scene1 = this.$scrollmagic.scene({
      triggerElement: ".fade-two", 
    })
    .setTween(tm)
      // ↓triggerのヘルプ表示
      // .addIndicators({ name: "OK" })

      // controllerに追加
      this.$scrollmagic.addScene(scene1)
  }
};
</script>

<style lang="scss" scoped>
.content-main {
  margin: 30px auto;
  width: 60%;
  text-align: left;

  h1{
    font-size: 40px;
  }

  .content-main-one{
    margin: 80px 0;
  }
}
</style>