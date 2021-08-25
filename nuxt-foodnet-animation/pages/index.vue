<template>
  <div class="main">
    <HeaderMain />

    <div class="information">
      <div class="company">
        <div class="map">
          <p class="sub-title">information</p>
        </div>
        <table class="company-table">
          <tbody>
            <tr>
              <th>2021年9月</th>
              <td>ホームページのリニューアル</td>
            </tr>
            <tr>
              <th>2021年8月</th>
              <td>夏季休暇：8月12日～16日</td>
            </tr>




          </tbody>
        </table>

        
      </div>
    </div>

    <div class="main-contents">
      <div class="main-content">
        <nuxt-link to="/content" class="product-pic">
          <div class="link-txt">事業内容</div>
          <img src="~/assets/images/product1.jpg" alt="" class="product-pic" />
        </nuxt-link>
      </div>

      <div class="main-content">
        <nuxt-link to="/company" class="product-pic">
          <div class="link-txt">会社概要</div>
          <img src="~/assets/images/product2.jpg" alt="" class="product-pic" />
        </nuxt-link>
      </div>

      <div class="main-content">
        <nuxt-link to="/contact" class="product-pic">
          <div class="link-txt">お問合せ</div>
          <img src="~/assets/images/product3.jpg" alt="" class="product-pic" />
        </nuxt-link>
      </div>

      <div class="main-content">
        <nuxt-link to="/online-shop" class="product-pic">
          <div class="link-txt">onlie shop</div>
          <img src="~/assets/images/product4.jpg" alt="" class="product-pic" />
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.information {
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
        border-bottom: 1px dashed rgb(84, 83, 83);
      }
    }

    .sub-title {
      color: $color-backbase;
      text-align: center;
    }
  }
}
.main-contents {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  .main-content {
    flex-basis: 40%;
    height: 200px;
    background-color: $color-white;
    margin: 30px auto;
    border-radius: 10px;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.25);
    overflow: hidden;

    @include target600() {
      height: 300px;
    }
    @include target960() {
      flex-basis: 20%;
    }

    &:hover {
      // background-color: rgb(244, 241, 241);
      .product-pic {
        opacity: 0.8;
      }
    }

    .product-pic {
      position: relative;
      // opacity: 0.8;
      width: 100%;
      height: 100%;
      object-fit: cover;
      position: relative;

      .link-txt {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 40px;
        color: white;
        text-shadow: 2px 2px 2px rgb(9, 9, 9);
        white-space: nowrap;
        z-index: 1000;
        font-weight: 500;
      }
    }
  }
}
</style>

