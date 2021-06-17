<template>
  <footer>
<hr>
      <div class="footer-inner">
          <div class="footer-logo">
              <img src="@/assets/logo.png" alt="Logo">
          </div>
          <div class="footer-nav">
              <div class="nav">
                  <ul>
                      <li><h3>Product</h3></li>
                      <li><router-link to="/about">Percetakan</router-link></li>
                      <li><router-link to="/about">Games</router-link></li>
                      <li><router-link to="/about">Alat Tulis Kantor</router-link></li>
                  </ul>
              </div>
              <div class="nav">
                  <ul>
                      <li><h3>Company</h3></li>
                      <li><router-link to="/about">Blogs</router-link></li>
                      <li><router-link to="/about">About</router-link></li>
                  </ul>
              </div>
              <div class="nav">
                  <ul>
                      <li><h3>Social</h3></li>
                      <li><router-link to="/about">Instagram </router-link></li>
                      <li><router-link to="/about">Facebook</router-link></li>
                      <li><router-link to="/about">Whatsapp</router-link></li>
                      <li><router-link to="/about">Email</router-link></li>
                  </ul>
              </div>
          </div>
      </div>
  </footer>
</template>

<script>
export default {
  name: 'footer-component'
}
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 576px) {
    .footer-inner {
        display: grid;
        grid-template-columns: 1fr;

        .footer-logo{
            grid-row-start: 2;
            img{
                width: 30%;
            }
        }
    }
}
@media only screen and (min-width: 576px) {
    .footer-inner{
        display: grid;
        grid-template-columns: 15rem auto;

    .footer-nav{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
    }
    }
}
</style>
