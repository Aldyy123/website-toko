<template>
  <section>
    <div class="landing-page">
      <div class="landing-text">
        <h2>Permudah kebutuhan cetak Dan Digital mu</h2>
        <div class="cta">
          <p>Semua akan terselesaikan hanya dengan click Pesan, dan antar</p>
          <hr />
          <li><a href="">Our Product</a></li>
        </div>
      </div>
      <div class="image-landing">
        <div class="img">
          <img src="@/assets/2.svg" alt="SVG" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'landing-page'
}
</script>

<style lang="scss" scoped>
@media only screen and (min-width: 576px), screen and (max-width: 576px) {
  .landing-page {
    display: grid;
    background: #9b7ddb;
    grid-template-columns: 1fr;

    .landing-text {
      padding: 20px;
      grid-row-start: 2;
      text-align: center;
      h2 {
        font-size: 20pt;
        color: white;
      }
      .cta {
        & > p {
          color: white;
        }
        padding: 10px;
        hr {
          margin-bottom: 20px;
          width: 50%;
        }
        li {
          list-style-type: none;
          display: flex;
          justify-content: center;

          a {
            text-decoration: none;
            border: 1 solid #fdfaf6;
            background: #fdfaf6;
            padding: 10px 15px;
          }
        }
      }
    }
    .image-landing {
      padding: 20px;
      display: flex;
      justify-content: center;
      img {
        width: 24rem;
      }
    }
  }
}
@media only screen and (min-width: 768px) {
  .landing-page{
    grid-template-columns: repeat(2, 1fr);
    .landing-text{
      grid-row-start: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
    }
    .image-landing {
      padding: 20px;
      img {
        width: 20rem;
      }
    }
  }
}

@media only screen and (min-width: 992px) {
   .landing-text{
     h2{
       font-size: 30pt!important;
       text-align: left;
     }
     p{
       font-size: 15pt;
     }
    }
    .image-landing {
      padding: 20px;
      img {
        width: 23rem!important;
      }
    }
}
@media only screen and (min-width: 1200px) {
  .landing-text{
     h2{
       font-size: 40pt!important;
       text-align: left;
     }
     p{
       font-size: 18pt;
     }
    }
    .image-landing {
      padding: 20px;
      img {
        width: 25rem!important;
      }
    }
}
</style>
