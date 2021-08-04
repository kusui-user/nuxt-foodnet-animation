<template>
  <div>
    <section>
   
      <h2 id="work-trigger" class="section-title effect-fade-side">Works</h2>
      <div class="article-body works">
        <div class="article-content">
          <p>技術ブログ</p>
          <a 
            id="work-image" href="https://mmtomitomimm.blogspot.com/"
            target="_blank" >
            <!-- <img src="~/assets/images/blog.png" /> -->
          </a>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  mounted() {
    const scene1 = this.$scrollmagic
      .scene({
        triggerElement: "#work-trigger",
        triggerHook: 0.5,
        duration: 300,
        reverse: false,
      })
      .setTween("#work-image", {
        css: {
          opacity: "1",
        },
      });
    // ---- ↓ triggerのヘルプを表示 ----
    // .addIndicators({ name: 'OK' })

    this.$scrollmagic.addScene(scene1);
  },
};
</script>
<style  scoped  lang="scss">


// ---- ↓ アニメーション実行前のスタイル（非表示にしておく） ----
 #work-image {
   opacity: 0;
 }

</style>
