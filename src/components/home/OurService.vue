<template>
  <section>
    <div class="header">
      <h2>Our Services</h2>
      <hr />
    </div>
    <div class="list-service">
      <a
        href="#"
        class="service"
        v-for="(service, index) in services"
        :key="index"
      >
        <div class="service-header">
          <img :src="service.img" alt="" />
        </div>
        <h3>{{ service.title }}</h3>
        <p>{{ service.text }}</p>
      </a>
    </div>
  </section>
</template>

<script>
export default {
  name: 'our-service',
  data () {
    return {
      services: [
        {
          img: require('@/assets/icon/gamepad.svg'),
          text: 'List games untuk mu para gamers',
          title: 'Games'
        },
        {
          img: require('@/assets/icon/print.svg'),
          text: 'Membuat percetakan undangan, Sticker, laminating',
          title: 'Percetakan'
        },
        {
          img: require('@/assets/icon/type.svg'),
          text: 'Menyediakan alat tulis kantor',
          title: 'Alat Tulis kantor'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 576px), screen and (min-width: 576px) {
  section {
    .header {
      h2 {
        text-align: center;
      }
      hr {
        width: 50%;
      }
    }
    .list-service {
      color: white;
      display: grid;
      grid-column-start: 2;
      text-align: center;
      grid-row-gap: 10px !important;

      .service {
        background: linear-gradient(to bottom, #9b7ddb, #e848c5, #aaa4a4);
        border: 1px solid;
        border-radius: 20px;
        .service-header {
          padding: 10px;
          img {
            width: 8rem;
          }
        }
      }
    }
  }
}
@media only screen and (min-width: 768px) {
  section {
    .header {
      text-align: center;
      hr {
        width: 30rem;
      }
    }
    .list-service {
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;

      .service {
        color: white;
        padding: 10px;
        .service-header img {
          width: 5rem;
        }
        h3 {
          font-size: 16pt;
        }
        p {
          font-size: 12pt;
        }
      }
    }
  }
}
@media only screen and (min-width: 1200px) {
  section {
    .header hr{
      width: 20rem;
    }
    .list-service {
      grid-template-columns: repeat(3, 300px);
      justify-content: center;
      gap: 20px;
    }
  }
}
</style>
