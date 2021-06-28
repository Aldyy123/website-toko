<template>
<section class="error" v-if="products.status === 'error' || products.result < 0">
<p>{{products.message}}</p>
</section>
  <section class="products-list" v-else-if="products.status === 'success'">
    <div v-for="product in products.result" :key="product._id" class="card-product">
      <div class="card-header">
        <router-link :to="`/detail/${product._id}`"
          ><img :src="product.images" :alt="product.name"
        /></router-link>
        <div class="title">
          <h3>{{ product.name }}</h3>
          <p>{{ product.price }}</p>
        </div>
      </div>
      <div class="card-bottom">
        <li><a href="https://www.google.com">Order Now</a></li>
        <div>
          <img class="favorite" src="@/assets/icon/favorite.svg" alt="asd" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
/* eslint-disable no-unused-vars */
import axios from 'axios'
import { ref, watchEffect, onMounted } from 'vue'
import config from '../store/config'
import { useRoute } from 'vue-router'

export default {
  name: 'list-products',
  props: {
    search: {
      type: String,
      default: ''
    },
    sort: {
      type: String,
      default: 'dateasc'
    }
  },
  setup (props) {
    const products = ref([])
    const route = useRoute()

    const getProducts = async () => {
      const result = await axios.get(`${config.api_url}products?type=${route.params.type}&sort=${props.sort}&search=${props.search || ''}`, {
        headers: config.headers
      })
      products.value = result.data
    }
    watchEffect(() => {
      getProducts()
    })

    return {
      products
    }
  }
}
</script>

<style lang="scss" scoped>
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
  padding: 20px;

  img {
    width: 100%;
    height: 20rem;
  }
  .title {
    display: flex;
    justify-content: space-between;
  }
  .card-bottom {
    display: grid !important;
    justify-content: space-between !important;
    align-items: flex-end;
    grid-template-columns: auto auto;
    div > img {
      // background: khaki;
      width: 30%;
      height: auto;
    }
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
