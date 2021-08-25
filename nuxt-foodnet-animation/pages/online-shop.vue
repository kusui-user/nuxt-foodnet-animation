<template>
  <div class="content-top">
    <top-img>
      <div class="img-txt">online shop</div>
    </top-img>

    <div class="content-main">
      <div class="content-main-one">
        <h1>祭のおかずや</h1>
        <hr />
        <p>お祭・イベント向け食材販売通販サイト</p>
        <a href="https://okazu-ippin.com/" target="_blank">
          <p class="url">url : https://okazu-ippin.com/</p>
        </a>
      </div>

      <div class="content-main-one">
        <h1>祭のおかずや　楽天市場店</h1>
        <hr />
        <p>お祭・イベント向け食材販売の通販サイト</p>
        <a href="https://www.rakuten.co.jp/okazuippin/" target="_blank"
          ><p class="url">url : https://www.rakuten.co.jp/okazuippin/</p>
        </a>
      </div>

      <div class="content-main-one">
        <h1>いつもの</h1>
        <hr />
        <p>業者向け業務食材の通販サイト</p>
        <a href="https://itumono.vercel.app/" target="_blank"
          ><p class="url">url :https://itumono.vercel.app/</p>
        </a>
      </div>
    </div>
  </div>
</template>

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