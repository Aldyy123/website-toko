<template>
  <main>
    <div class="error-product" v-if="product.status === 'error'">
      <p>Error:</p>
    </div>
    <div class="detail-product" v-else-if="product.status === 'success'">
      <div class="image-product">
        <img class="image-overview"
          :src="imageOverview || product.result.images"
          :alt="product.result.name"
        />
      </div>
      <div class="detail-text">
        <div class="detail-action">
        <h2>{{ product.result.name }}</h2>
          <button><img src="@/assets/icon/favorite.svg" alt="sdfsde" /></button>
        </div>
        <div class="btn-action">
          <li><a :href=linkWa target="_blank">Chat Whatsapp</a></li>
        </div>
        <carousel-product @overview="imageChange" :images="product.result.images"></carousel-product>
      </div>
    </div>
  </main>
</template>

<script>
/* eslint-disable no-unused-vars */
import { useRoute } from 'vue-router'
import { onMounted, reactive, ref, toRefs } from 'vue'
import { config } from '../store/config'
import axios from 'axios'
import { useStore } from 'vuex'
import store from '@/store'
import CarouselProduct from '@/components/CarouselProduct'

export default {
  components: {
    CarouselProduct
  },
  setup () {
    const route = useRoute()
    const product = ref({})
    const imageOverview = ref()
    const linkWa = ref('')
    const store = useStore()

    const getDetail = async () => {
      const result = await axios.get(
        `${config.api_url}products/get-product/${route.params.id}`,
        {
          headers: { Authorization: await store.dispatch('getToken') }
        }
      )
      linkWa.value = config.wa
      product.value = result.data
    }
    const imageChange = (event) => {
      imageOverview.value = event
    }
    getDetail()
    return {
      getDetail,
      product,
      imageChange,
      imageOverview,
      linkWa
    }
  }
}
</script>

<style lang="scss" scoped>
main {
  margin: 0 10rem;
}

@media only screen and (max-width: 576px){
  main{
    margin: 0;
  }
   .detail-product {
  display: grid;
  justify-content:center;
  margin-top: 5rem;
  .image-product {
    img {
      width: 100%;
    }
  }

  .detail-text {
    display: grid;
    padding: 10px;
    justify-content: center;
    gap: 10px;
    .detail-action {
      display: grid;
      grid-template-columns: repeat(2, auto);
      padding: 10px;
      justify-content: space-between;
      button {
        background: none;
        cursor: pointer;
        border: none;
      }
      img {
        width: 2rem;
      }
    }
    .images-slider {
      display: grid;
      grid-template-columns: repeat(3, auto);
      gap: 5px;
      grid-row-start: 1;
      img {
        width: 40%;
      }
    }
    .btn-action {
      a {
        text-align: center;
        display: block;
        padding: 10px 1rem;
        background: #185adb;
        color: white;
      }
    }
  }
}
}
@media only screen and (min-width: 576px){
  main{
    margin: 0;
  }
   .detail-product {
  display: grid;
  justify-content:center;
  margin-top: 5rem;
  .image-product {
    img {
      width: 100%;
    }
  }

  .detail-text {
    display: grid;
    padding: 10px;
    justify-content: center;
    gap: 10px;
    .detail-action {
      display: grid;
      grid-template-columns: repeat(2, auto);
      padding: 10px;
      justify-content: space-between;
      button {
        background: none;
        cursor: pointer;
        border: none;
      }
      img {
        width: 2rem;
      }
    }
    .images-slider {
      grid-row-start: 1;
      img {
        width: 25%;
      }
    }
    .btn-action {
      a {
        text-align: center;
        display: block;
        padding: 10px 1rem;
        color: white;
        background: #185adb;
      }
    }
  }
}
}
@media only screen and (min-width: 768px){
   .detail-product {
  display: grid;
  grid-template-columns: auto;
  justify-content:center;
  margin-top: 5rem;
  .image-product {
    padding: 10px;
    img {
      width: 100%;
    }
  }

  .detail-text {
    display: grid;
    flex-direction: column;
    padding: 10px;
    justify-content: center;
    gap: 20px;
    .detail-action {
      display: grid;
      grid-template-columns: repeat(2, auto);
      padding: 10px;
      justify-content: space-between;
      button {
        background: none;
        cursor: pointer;
        border: none;
      }
      img {
        width: 2rem;
      }
    }
    .images-slider {
      grid-row-start: 1;
      img {
        width: 25%;
      }
    }
    .btn-action {
      a {
        text-align: center;
        display: block;
        padding: 10px 1rem;
        background: #185adb;
      }
    }
  }
}
}
@media only screen and (min-width: 992px){
  .detail-product {
  display: grid;
  grid-template-columns: repeat(2, auto);
  justify-content:center;
  margin-top: 5rem;
  .image-product {
    padding: 10px;
    img {
      width: 100%;
    }
  }

  .detail-text {
    display: flex;
    flex-direction: column;
    padding: 10px;
    justify-content: center;
    gap: 20px;
    .detail-action {
      display: grid;
      grid-template-columns: repeat(2, auto);
      padding: 10px;
      justify-content: space-between;
      button {
        background: none;
        cursor: pointer;
        border: none;
      }
      img {
        width: 2rem;
      }
    }
    .images-slider {
      img {
        width: 30%;
      }
    }
    .btn-action {
      a {
        text-align: center;
        display: block;
        padding: 10px 1rem;
        background: #185adb;
      }
    }
  }
}
}
@media only screen and (min-width: 1200px){
  .detail-product {
  display: grid;
  grid-template-columns: repeat(2, 30rem);
  justify-content:center;
  margin-top: 5rem;
  .image-product {
    padding: 10px;
    img {
      width: 100%;
    }
  }

  .detail-text {
    display: flex;
    flex-direction: column;
    padding: 10px;
    justify-content: center;
    gap: 20px;
    .detail-action {
      display: grid;
      grid-template-columns: repeat(2, auto);
      padding: 10px;
      justify-content: space-between;
      button {
        background: none;
        cursor: pointer;
        border: none;
      }
      img {
        width: 2rem;
      }
    }
    .images-slider {
      img {
        width: 30%;
      }
    }
    .btn-action {
      a {
        text-align: center;
        display: block;
        padding: 10px 1rem;
        background: #185adb;
      }
    }
  }
}
}
</style>
