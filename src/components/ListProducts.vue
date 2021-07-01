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
        <li><a :href="linkWa" target="_blank">Order Now</a></li>
      </div>
    </div>
    </div>
    <div class="card-footer pb-0 pt-3" v-if="props.search === ''">
      <VueTailwindPagination :current="products.result.page" :total="products.result.count" :per-page="products.result.perPage" @page-changed="paginate"/>
    <!-- <ul
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
    </ul> -->
  </div>
  </section>
</template>

<script>
/* eslint-disable no-unused-vars */
/* eslint-disable vue/no-unused-components */
import '@ocrv/vue-tailwind-pagination/dist/style.css'
import axios from 'axios'
import { ref, watchEffect, onUpdated, computed } from 'vue'
import config from '../store/config'
import { useRoute, useRouter, RouterLink, useLink } from 'vue-router'
import Pagination from 'v-pagination-3'
import VueTailwindPagination from '@ocrv/vue-tailwind-pagination'

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
    Pagination,
    VueTailwindPagination
  },
  setup (props) {
    const products = ref([])
    const route = useRoute()
    const router = useRouter()
    const linkWa = ref(config.wa)
    const getProducts = async () => {
      let result
      if (props.search === '') {
        result = await axios.get(
          `${config.api_url}products?type=${route.params.type}&sort=${props.sort}&page=${route.query.page}`,
          {
            headers: config.headers
          }
        )
        products.value = result.data
      } else {
        result = await axios.get(
          `${config.api_url}products?type=${route.params.type}&sort=${props.sort}&search=${props.search}`,
          {
            headers: config.headers
          }
        )
        products.value = result.data
      }
    }
    const paginate = ($event) => {
      products.value.result.page = $event
      router.push({
        query: { page: $event }
      })
    }
    watchEffect(() => {
      getProducts()
    })

    return {
      products,
      props,
      linkWa,
      paginate
    }
  }
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
