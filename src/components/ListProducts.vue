<template>
  <section
    class="error"
    v-if="products.status === 'error' || products.result < 0"
  >
    <p>{{ products.message }}</p>
  </section>
  <section v-else-if="products.status === 'success'">
    <div class="products-list">
      <div
      v-for="product in products.result.products"
      :key="product._id"
      class="card-product"
    >
      <div class="card-header">
        <router-link :to="`/detail/${product._id}`"
          ><img :src="product.images" :alt="product.name"
        /></router-link>
        <div class="title">
          <h3>{{ product.name }}</h3>
          <div>
            <img class="favorite" src="@/assets/icon/favorite.svg" alt="asd" />
          </div>
        </div>
      </div>
      <div class="card-bottom">
        <li><a href="https://www.google.com">Order Now</a></li>
      </div>
    </div>
    </div>
  <div class="card-footer pb-0 pt-3">
    <ul
      v-if="products.result.products && products.result.count"
      class="pagination"
    >
      <li
        :class="{ disabled: products.result.page === 1 }"
        class="page-item first-item"
      >
        <router-link :to="{ query: { page: 1 } }" class="page-link"
          >First</router-link
        >
      </li>
      <li
        :class="{ disabled: products.result.page === 1 }"
        class="page-item previous-item"
      >
        <router-link
          :to="{ query: { page: products.result.page - 1 } }"
          class="page-link"
          >Previous</router-link
        >
      </li>
      <li
        v-for="page in products.result.totalPage"
        :key="page"
        :class="{ 'active': products.result.page === page }"
        class="page-item number-item"
      >
        <router-link :to="{ query: { page: page } }" class="page-link">{{
          page
        }}</router-link>
      </li>
      <li
        :class="{
          disabled: products.result.page === products.result.totalPage,
        }"
        class="page-item next-item"
      >
        <router-link
          :to="{ query: { page: products.result.page + 1 } }"
          class="page-link"
          >Next</router-link
        >
      </li>
      <li
        :class="{
          disabled: products.result.page === products.result.totalPage,
        }"
        class="page-item last-item"
      >
        <router-link
          :to="{ query: { page: products.result.totalPage } }"
          class="page-link"
          >Last</router-link
        >
      </li>
    </ul>
  </div>
  </section>
</template>

<script>
/* eslint-disable no-unused-vars */
/* eslint-disable vue/no-unused-components */

import axios from 'axios'
import { ref, watchEffect, onMounted, computed } from 'vue'
import config from '../store/config'
import { useRoute } from 'vue-router'
import Pagination from 'v-pagination-3'

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
  components: {
    Pagination
  },
  setup (props) {
    const products = ref([])
    const route = useRoute()
    const getProducts = async () => {
      const result = await axios.get(
        `${config.api_url}products?type=${route.params.type}&sort=${props.sort}&search=${props.search}&page=${route.query.page}`,
        {
          headers: config.headers
        }
      )
      products.value = result.data
    }
    const apa = ($event) => {
      console.log($event)
    }
    watchEffect(() => {
      getProducts()
    })

    return {
      products,
      apa
    }
  }
}
</script>

<style lang="scss" scoped>
.card-footer {
  padding: 20px;
  // background: rgb(43, 226, 73);
  ul {
    display: flex;
    justify-content: center;
li{
    &.active {
        background: #9b7ddb!important;
        a{
        color: #fdfaf6;
        }
      }
      &.disabled {
        pointer-events: none;
        a{
        color: rgb(168, 168, 168)!important;
        }
      }
      border: 1px solid black;
        padding: 10px;
}
    a {
      color: rgb(0, 0, 0);
        padding: 10px;
    }
  }
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
