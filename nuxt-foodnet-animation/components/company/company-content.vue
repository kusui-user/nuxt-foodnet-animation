<template>
  <div class="company">
    <p class="main-title">会社概要</p>

    <table class="company-table">
      <tbody>
        <tr>
          <th>会社名</th>
          <td>株式会社フードネットワーク</td>
        </tr>
        <tr>
          <th>代表取締役</th>
          <td>楠井隆志</td>
        </tr>
        <tr>
          <th>所在地</th>
          <td>
            〒160-0004 東京都新宿区四谷２丁目４-18<br />第３アマシンビル７階
          </td>
        </tr>
        <tr>
          <th>電話</th>
          <td>03-5362-3252</td>
        </tr>
        <tr>
          <th>ファックス</th>
          <td>03-6265-6906</td>
        </tr>
        <tr>
          <th>設立</th>
          <td>2014年1月</td>
        </tr>
        <tr>
          <th>資本金</th>
          <td>300万円</td>
        </tr>
        <tr>
          <th>業種</th>
          <td>食材及び加工食品の販売、コンサルティング、インターネット販売</td>
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
export default {};
</script>

<style lang="scss" scoped>
.company {
  width: 100%;
  background-color: $color-backbase;
  .main-title{
    color: $color-white;
    text-align: center;
  }
  .company-table {
    width: 80%;
    background-color: $color-white;
    margin: 10px auto;
    // margin: 0;
    margin-bottom: 20px;
    border-style: 0;
    border-collapse: collapse;

    & th {
      text-align: center;
      border: 1px solid;
      width: 30%;
      padding: 15px 0;
      letter-spacing: 0.5em;
    }

    & td {
      text-align: left;
      border: 1px solid;
      padding: 10px 0;
      // text-indent : 20px;
      padding-left: 7px;
    }
  }

  .map {
    width: 80%;
    margin: 0 auto;

    & map-flame {
      width: 100%;
      text-align: center;
    }
  }
   .sub-title{
    color: $color-white;
    text-align: center;
  }
}
</style>