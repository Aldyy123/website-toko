<template>
  <div class="products-list">
    <div class="card-product" v-for="product in products" :key="product._id">
      <div class="card-header">
        <router-link to="/">
          <img :src="product.images" :alt="product.name">
        </router-link>
        <div class="title">
          <h3>{{ product.name }}</h3>
          <div>
            <img class="favorite" src="@/assets/icon/favorite.svg" alt="asd" />
          </div>
        </div>
      </div>
      <div class="card-bottom">
        <li><a href="linkWa" target="_blank">Order Now</a></li>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'list-products',
  props: ['products']
}
</script>

<style lang="scss" scoped>
.card-footer {
  padding: 20px;
  // background: rgb(43, 226, 73);
  display: inline-block;
}
.card-product:hover {
  background: #9b7ddb;
  .card-header img {
    background: #9b7ddb;
    background-size: cover;
    z-index: 999999999999999999;
  }
  .card-bottom a {
    background: white;
    color: black;
  }
}
.products-list {
  margin: 10px;
  display: grid;
  gap: 30px;
}
.card-product {
  background: #fdfaf6;
  border-radius: 20px;
  display: grid;
  grid-template-columns: auto;
  height: auto !important;
  text-align: center;
  transition: all 0.5s ease;
  padding: 20px;
  box-shadow: 1px 1px 5px;

  img {
    width: 100%;
    height: 20rem;
  }
  .title {
    display: flex;
    justify-content: space-between;
    div > img {
      width: 30%;
      height: auto;
      margin: 0 auto;
    }
  }
  .card-bottom {
    display: grid !important;
    justify-content: space-between !important;
    align-items: flex-end;
    grid-template-columns: auto auto;
    a {
      padding: 10px 20px;
      background: #9b7ddb;
      color: white;
    }
  }
}

@media only screen and (min-width: 768px) {
  .products-list {
    grid-template-rows: repeat(2, auto);
    grid-template-columns: repeat(2, 1fr);
  }
}
@media only screen and (min-width: 992px) {
  .products-list {
    grid-template-rows: repeat(3, auto);
    grid-template-columns: repeat(3, 1fr);
  }
}
@media only screen and (min-width: 1200px) {
  .products-list {
    grid-template-rows: repeat(4, auto);
    grid-template-columns: repeat(4, 1fr);
  }
}
@media only screen and (min-width: 1400px) {
  .products-list {
    grid-template-rows: repeat(5, auto);
    grid-template-columns: repeat(5, 1fr) !important;
  }
}
</style>
