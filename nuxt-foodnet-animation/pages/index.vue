<template>
  <div class="main">
    <div class="main-contents">
      <div class="main-content">
        <nuxt-link to="/company">
          <img src="~/assets/images/product1.jpg" alt="" class="product-pic" />
        </nuxt-link>
      </div>
      <div class="main-content">
        <img src="~/assets/images/product2.jpg" alt="" class="product-pic" />
      </div>
      <div class="main-content">
        <img src="~/assets/images/product3.jpg" alt="" class="product-pic" />
      </div>
      <div class="main-content">
        <img src="~/assets/images/product4.jpg" alt="" class="product-pic" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main-contents {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  .main-content {
    flex-basis: 40%;
    height: 200px;
    background-color: $color-white;
    // border: 1px solid;
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
      background-color: rgb(244, 241, 241);
      .product-pic {
        opacity: 1;
      }
    }

    .product-pic {
      opacity: 0.8;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>

