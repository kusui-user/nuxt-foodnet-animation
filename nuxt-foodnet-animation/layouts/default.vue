<template>
  <div class="layout-default">
    <DeskNavMenu />

    <Header />

    <transition mode=”out-in”>
      <Nuxt />
    </transition>

    <Footer />
  </div>
</template>

<script>

  
export default {

    mounted() {
    // const controller = new ScrollMagic.Controller();
    const scene1 = this.$scrollmagic.scene({
      triggerElement: ".fade", // トリガーにする要素ID
      // triggerHook: 0, // トリガーの位置
      // offset: 100, // 開始するスクロールの位置
      // duration: 300, // 終了するスクロールの位置
      // reverse: false, // 反対方向からのスクロールを制御
    })
    .setClassToggle(".target", "active") // .activeというクラスを追加・削除を行う
      // ↓実行されるアニメーションと、対象の要素IDを指定
      // .setTween(".target", {
      //   css: {
      //     opacity : 0, // 透明だったクラスを不透明にして表示
      //   },
      // })
      // ↓triggerのヘルプ表示
      .addIndicators({ name: "OK" })

      // controllerに追加
      this.$scrollmagic.addScene(scene1)
  },
};
</script>

<style lang="scss" scoped>
.layout-default {
  position: relative;
  min-height: 100vh;
  max-width: 1400px;

  // .page-enter {
  //   opacity: 0;
  // }
  // .page-enter-active {
  //   transition: opacity 2s;
  // }

.v-enter {
  transform: translate(0, -20px);
  opacity: 0.8;
}
.v-enter-to {
  opacity: 1;
}
.v-enter-active {
  transition: all 1s 0s ease;
}
.v-leave {
  transform: translate(0, 0);
  opacity: 1;
}
.v-leave-to {
  transform: translate(0, 20px);
  opacity: 0;
}
.v-leave-active {
  transition: all .5s 0s ease;
}
  
  
}
</style>
