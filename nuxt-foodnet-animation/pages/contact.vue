<template>
  <div class="contact-main">
    <!-- <DeskNavMenu /> -->
    <top-img>
      <div class="img-txt">お問合せ</div>
    </top-img>

    <p class="ttl">お問合せフォーム(*は必須）</p>
    <FormContact />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.contact-main {
  background-color: $color-white;

  .ttl {
    padding-top: 100px;
    color: black;
    text-align: center;
    margin-top: 20px;
    font-size: 20px;
  }
}
</style>