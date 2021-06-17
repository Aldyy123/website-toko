<template>
  <main class="home">
    <landing-page></landing-page>
    <div class="quick-services">
      <div class="reason-why">
        <div class="header-reason">
          <h3>Why Our Service</h3>
          <hr />
        </div>
        <div class="outer-icon">
          <div v-for="(data, index) in reasonsData" :key="index">
            <img :src="data.img" alt="as" />
            <p>{{ data.text }}</p>
          </div>
        </div>
      </div>
      <our-service></our-service>
    </div>
    <div class="create-account">
      <h2>Create Account??</h2>
      <a class="account-cta" href="#">Register</a>
    </div>
  </main>
  <footer-component></footer-component>
</template>

<script>
// @ is an alias to /src
import LandingPage from '@/components/home/LandingPage'
import OurService from '@/components/home/OurService'
import FooterComponent from '@/components/FooterComponent'

export default {
  name: 'Home',
  data () {
    return {
      reasonsData: [
        {
          img: require('@/assets/icon/delivery.svg'),
          text: 'Pelayanan Yang Cepat'
        },
        {
          img: require('@/assets/icon/save.svg'),
          text: 'Harga Terjangkau'
        },
        {
          img: require('@/assets/icon/product.svg'),
          text: 'Product Yang banyak'
        }
      ]
    }
  },
  components: {
    LandingPage,
    OurService,
    FooterComponent
  }
}
</script>

<style lang="scss" scoped>
.quick-services {
  padding: 20px;
}
@media only screen and (max-width: 576px) {
  .reason-why {
    display: grid;
    grid-template-columns: 100%;

    .header-reason {
      text-align: center;
      hr {
        width: 50%;
      }
    }
    .outer-icon {
      grid-template-columns: repeat(3, 1fr);
      display: grid;
      div {
        display: flex;
        align-items: center;
        flex-direction: column;
        img {
          width: 40% !important;
        }
        p {
          font-size: 10pt;
          text-align: center;
        }
      }
    }
  }
  .create-account {
    background: #185adb;
    color: white;
    padding: 20px;
    display: grid;
    width: auto;
    grid-template-columns: 15rem;
    justify-content: center;
    text-align: center;
    a {
      text-decoration: none;
      background: #fdfaf6;
      border-radius: 5px;
      padding: 10px 20px;
    }
  }
}
@media only screen and (min-width: 576px) {
  .reason-why {
    .header-reason {
      text-align: center;
      hr {
        width: 50%;
      }
    }

    .outer-icon {
      display: grid;
      text-align: center;
      grid-template-columns: repeat(3, 1fr);
      img {
        width: 25% !important;
      }
    }
  }
  .create-account {
    background: #185adb;
    color: white;
    width: auto;
    padding: 20px;
    display: grid;
    grid-template-columns: 20rem;
    justify-content: center;
    text-align: center;
    a {
      text-decoration: none;
      background: #fdfaf6;
      border-radius: 5px;
      padding: 10px 20px;
    }
  }
}
@media only screen and (min-width: 768px) {
  hr {
        width: 20rem!important;
      }
  .outer-icon {
      text-align: center;
      grid-template-columns: repeat(3, 10rem)!important;
      justify-content: center;
      img {
        width: 30%!important;
      }
    }
}

</style>
