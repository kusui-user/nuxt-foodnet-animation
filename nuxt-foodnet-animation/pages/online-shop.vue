<template>
  <div class="content-top fade-three">
    <!-- <DeskNavMenu /> -->
    <top-img>
      <div class="img-txt">online shop</div>
    </top-img>

    <div class="content-main target-seven">
      <div class="content-main-one">
        <h1>祭のおかずや</h1>
        <hr />
        <p>お祭・イベント向け食材販売通販サイト</p>
        <a href="https://okazu-ippin.com/" target="_blank">
          <p class="url">url : https://okazu-ippin.com/</p>
        </a>
      </div>

      <div class="content-main-one target-eight">
        <h1>祭のおかずや　楽天市場店</h1>
        <hr />
        <p>お祭・イベント向け食材販売の通販サイト</p>
        <a href="https://www.rakuten.co.jp/okazuippin/" target="_blank"
          ><p class="url">url : https://www.rakuten.co.jp/okazuippin/</p>
        </a>
      </div>

      <div class="content-main-one target-nine">
        <h1>いつもの</h1>
        <hr />
        <p>業者向け業務食材の通販サイト</p>
        <a href="https://itumono.jp/" target="_blank"
          ><p class="url">url :https://itumono.jp/</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted(){
    var tm = new TimelineMax();
    tm.staggerFrom(".target-seven",0.5,{y: 300, ease:"elastic.out(1, 0.3)"});
    tm.staggerFrom(".target-eight",0.5,{y: 300, ease:"elastic.out(1, 0.3)"});
    tm.staggerFrom(".target-nine",0.5,{y: 300, ease:"elastic.out(1, 0.3)"});
    const scene1 = this.$scrollmagic.scene({
      triggerElement: ".fade-three", 
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

  h1 {
    font-size: 30px;
  }

  .content-main-one {
    margin: 80px 0;

    .url{
      text-decoration: underline;
    }
  }
}
</style>