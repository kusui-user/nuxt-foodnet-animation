<template>
  <div class="company">
    <table class="company-table ">
      <tbody class="target">
        <tr>
          <th>会社名</th>
          <td >株式会社フードネットワーク</td>
        </tr>
        <tr>
          <th>代表</th>
          <td>楠井 隆志</td>
        </tr>
        <tr>
          <th>所在地</th>
          <td >
            〒160-0004 東京都新宿区四谷２丁目４-18<br />第３アマシンビル７階
          </td>
        </tr>
        <tr>
          <th >電話</th>
          <td>03-5362-3252</td>
        </tr>
        <tr>
          <th >Fax</th>
          <td>03-6265-6906</td>
        </tr>
        <tr>
          <th>設立</th>
          <td>2014年1月</td>
        </tr>
        <tr>
          <th class="fade">資本金</th>
          <td>300万円</td>
        </tr>
        <tr>
          <th >業種</th>
          <td >食材及び加工食品の販売、コンサルティング、インターネット販売</td>
        </tr>
      </tbody>
    </table>

    <div class="map">
      <p class="sub-title">アクセスマップ</p>

      <div class="map-flame">
        <iframe
          src="//www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1926.8832568688874!2d139.72579006190688!3d35.68639590289832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188c8c900d7039%3A0xb11d0d0bb977df21!2z44CSMTYwLTAwMDQg5p2x5Lqs6YO95paw5a6_5Yy65Zub6LC377yS5LiB55uu77yU4oiS77yR77yYIOOCouODnuOCt-ODs-ODk-ODqw!5e0!3m2!1sja!2sjp!4v1506391814592"
          width="100%"
          height="400"
          frameborder="0"
          style="border: 0"
          allowfullscreen=""
        ></iframe>
      </div>
    </div>
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
      // .addIndicators({ name: "OK" })

      // controllerに追加
      this.$scrollmagic.addScene(scene1)
  },

};
</script>

<style lang="scss" scoped>
.company {
  width: 100%;
  background-color: $color-white;
  padding-top: 150px;

  .company-table {
    width: 60%;
    background-color: $color-white;
    margin: 10px auto;
    margin-bottom: 20px;
    border-collapse: collapse;

    & th {
      text-align: left;
      width: 30%;
      padding: 20px 0;
      letter-spacing: 0.5em;
    }

    & td {
      text-align: left;
      border: 1px solid;
      padding-left: 7px;
    }
    table,
    td,
    th {
      border: none;
      border-bottom: 1px solid rgb(84, 83, 83);
    }
  }

  .map {
    width: 70%;
    margin: 0 auto;
    padding: 100px 0;

    & map-flame {
      width: 100%;
      text-align: center;
    }
  }
  .sub-title {
    color: $color-backbase;
    text-align: center;
  }
}

.active {
  font-size: 20px;
}
</style>