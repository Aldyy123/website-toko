<template>
  <header>
    <nav>
      <router-link to="/" class="logo">
        <img src="@/assets/logo.png" alt="Logo" />
      </router-link>
      <div class="toggle-nav">
        <button class="btn-toggle" @click="collapse">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            class="bi"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            ></path>
          </svg>
        </button>
      </div>
      <div class="menu">
        <div class="nav-menu">
          <ul>
            <li><router-link to="/">Home</router-link></li>
            <li class="dropdown">
              <button>Services</button>
              <ul class="list-dropdown" ref="apa">
                <li><router-link to="/products/atk">ATK</router-link></li>
                <li><router-link to="/products/printing">Invitations</router-link></li>
                <li><router-link to="/products/games">Games</router-link></li>
              </ul>
            </li>
            <li class="dropdown">
              <button>Company</button>
              <ul class="list-dropdown">
                <li><router-link to="/about">About</router-link></li>
                <li><router-link to="/blogs">Blogs</router-link></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'navigation-bar',
  methods: {
    collapse () {
      const menu = document.querySelector('.menu')
      menu.classList.toggle('collapse')
    }
  }
}
</script>

<style lang="scss" scoped>
// Handphone
@media only screen and (max-width: 576px) {
  nav {
    background: #fdfaf6 !important;
    display: grid;
    // grid-template-columns: 150px 1fr 150px;
    position: relative;
    .logo {
      display: flex;
      padding: 10px;
      justify-content: center;
      img {
        width: 20%;
      }
    }
    ul {
      list-style-type: none;
    }
    a {
      text-decoration: none;
      color: #fdfaf6 !important;
    }
    .menu {
      transition: all 0.7 ease;
      right: 100rem !important;
      opacity: 0;
      width: 90%;
      position: fixed;
      background: rgb(117, 50, 205);
      height: 100vh;
    }
    .collapse {
      opacity: 1;
      right: auto !important;
    }
    .nav-menu ul {
      list-style: none;
      display: grid;
      height: auto;
    }
    .dropdown {
      display: grid;
      padding: 10px;
       button{
        text-align: left;
        display: block;
        color: white!important;
        background: none;
        border: none;
        border-radius: 20px;
        padding: 10px;
      }
      &:hover ul.list-dropdown {
        visibility: visible;
        opacity: 1;
        height: 6rem;
      }
      ul.list-dropdown {
        visibility: hidden;
        opacity: 0;
        padding: 5px;
        transition: all 0.3s ease;
        width: auto;
        // background: rgb(0, 60, 255);
        list-style-type: none;
        height: 0;
        li a {
          margin-right: 40px;
          display: block;
          padding : 5px;
          background: saddlebrown;
        }
      }
    }
    .toggle-nav {
      display: flex;
      justify-content: center;
      align-items: center;
      grid-column-start: 12;
      grid-row-start: 1;
      button {
        cursor: pointer;
        background: transparent;
        border: none;
        padding: 10px;
        img {
          width: 32px;
        }
      }
    }
  }
}

// Tablet
@media only screen and (min-width: 576px) {
  nav {
    background: #fdfaf6 !important;
    display: grid;
    grid-template-columns: 150px 1fr 150px;
    position: relative;
    .logo {
      display: flex;
      padding: 10px;
      justify-content: center;
      img {
        width: 40%;
      }
    }
    ul {
      list-style-type: none;
    }
    a {
      text-decoration: none;
      color: #fdfaf6 !important;
    }
    .menu {
      transition: all 0.7 ease;
      right: 100rem !important;
      opacity: 0;
      width: 90%;
      position: fixed;
      background: rgb(117, 50, 205);
      height: 100vh;
    }
    .collapse {
      opacity: 1;
      right: auto !important;
    }
    .nav-menu ul {
      list-style: none;
       display: grid;
      height: auto;
    }
    .dropdown {
      display: grid;
      padding: 20px;
      button{
        display: block;
        text-align: left;
        background: none;
        font-weight: bold;
        color: white;
        padding: 10px;
        border: none;
      }
      &:hover ul.list-dropdown {
        height: 7rem;
        visibility: visible;
        opacity: 1;
      }
      ul.list-dropdown {
        visibility: hidden;
        opacity: 0;
        transition: all 0.3s ease;
        display: grid;
        padding: 10px;
        list-style-type: none;
        height: 0;
        li a {
          margin-right: 40px;
          display: block;
          padding : 5px;
          background: saddlebrown;
        }
      }
    }
    .toggle-nav {
      display: flex;
      justify-content: center;
      align-items: center;
      grid-column-start: 12;
      grid-row-start: 1;
      button {
        cursor: pointer;
        background: transparent;
        border: none;
        padding: 10px;
        img {
          width: 32px;
        }
      }
    }
  }
}

// Computer Desktop
@media only screen and (min-width: 992px), screen and (min-width: 768px) {
  nav {
    .logo img {
      width: 50%;
    }
    background: #fdfaf6 !important;
    display: grid;
    grid-template-areas: a div div;
    grid-template-columns: 150px 1fr;
    grid-column-gap: 15%;
    .toggle-nav {
      display: none;
    }
    .menu {
      display: flex !important;
      justify-content: space-around !important;
      position: static;
      height: auto;
      opacity: 1;
      background: none;
    }
    .nav-menu ul {
      list-style: none;
      display: flex;
      flex-direction: row;
      height: auto;
      align-items: center;
      width: 20rem;
      justify-content: space-around;
    }
    .dropdown {
      display: flex;
      flex-direction: column;
      padding: 0;
      position: relative;
      button{
        color: black;
      }

      &:hover ul.list-dropdown {
        height: 10rem;
        visibility: visible;
        overflow: visible;
        opacity: 1;
      }
      ul.list-dropdown {
        position: absolute;
        visibility: hidden;
        overflow: hidden;
        top: 20px;
        left: -20px;
        opacity: 0;
        transition: all 0.3s ease;
        width: 10rem;
        display: grid;
        grid-template-columns: 100%;
        grid-template-rows: repeat(3, auto);
        z-index: 999999999;
        background: rgb(185, 177, 177);
        list-style-type: none;
        height: 0;
          margin: 10px;
        li a {
          margin-right: 40px;
          display: block;
          background: none!important;
          // color: #
        }
      }
    }
    a {
      padding: 10px 15px;
      color: black !important;
      text-decoration: none;
    }
  }
}
</style>
