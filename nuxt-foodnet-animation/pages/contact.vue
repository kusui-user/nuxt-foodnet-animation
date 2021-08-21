<template>
  <div class="contact-main">
    <p class="ttl">お問合せ(*は必須）</p>
    <FormContact />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.contact-main{
  background-color: $color-backbase;

  .ttl{
    color:$color-white;
    text-align: center;
    margin-top: 20px;
    font-size: 20px;
  }
}

</style>