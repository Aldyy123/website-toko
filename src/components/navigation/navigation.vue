<template>
  <header>
    <nav>
      <a href="/" class="logo">
        <img src="@/assets/logo.png" alt="Logo" />
      </a>
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
            <li><a href="#">Home</a></li>
            <li class="dropdown">
              <a href="#dropdown">Services</a>
              <ul class="list-dropdown">
                <li><a href="">ATK</a></li>
                <li><a href="">Invitations</a></li>
                <li><a href="">Games</a></li>
              </ul>
            </li>
            <li class="dropdown">
              <a href="#dropdown">Company</a>
              <ul class="list-dropdown">
                <li><a href="">About</a></li>
                <li><a href="">Blogs</a></li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="account">
          <ul>
            <li class="dropdown">
              <a href="#">Account</a>
              <ul class="list-dropdown">
                <li><a href="#/about">About</a></li>
                <li><a href="">Blogs</a></li>
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
    grid-template-columns: 150px 1fr 150px;
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
      position: absolute;
      background: rgb(117, 50, 205);
      height: 100vh;
    }
    .collapse {
      opacity: 1;
      right: auto !important;
    }
    .nav-menu ul {
      list-style: none;
      display: flex;
      flex-direction: column;
      height: 200px;
      justify-content: space-around;
    }
    .dropdown {
      display: flex;
      flex-direction: column;
      // background: darksalmon;
      padding: 20px;
      position: relative;
      &:hover ul.list-dropdown {
        display: flex;
        visibility: visible;
        opacity: 1;
      }
      ul.list-dropdown {
        visibility: hidden;
        opacity: 0;
        transition: all 0.3s ease;
        width: 200px;
        flex-direction: column;
        z-index: 999999999;
        background: rgb(255, 0, 0);
        list-style-type: none;
        align-items: center;
        right: 0rem;
        justify-content: space-evenly;
        top: 35px;
        height: 200px;
        // right: 0px;
        position: absolute;
        li a {
          margin-right: 40px;
          display: block;
        }
      }
    }
    .toggle-nav {
      display: flex;
      justify-content: center;
      align-items: center;
      grid-column-start: 12;
      grid-row-start: 1;
      background: yellow;
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
    .account {
      align-items: center;
      justify-content: space-evenly;
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
      position: absolute;
      background: rgb(117, 50, 205);
      height: 100vh;
    }
    .collapse {
      opacity: 1;
      right: auto !important;
    }
    .nav-menu ul {
      list-style: none;
      display: flex;
      flex-direction: column;
      height: 200px;
      justify-content: space-around;
    }
    .dropdown {
      display: flex;
      flex-direction: column;
      // background: darksalmon;
      padding: 20px;
      position: relative;
      &:hover ul.list-dropdown {
        display: flex;
        visibility: visible;
        opacity: 1;
      }
      ul.list-dropdown {
        visibility: hidden;
        opacity: 0;
        transition: all 0.3s ease;
        width: 200px;
        flex-direction: column;
        z-index: 999999999;
        background: rgb(255, 0, 0);
        list-style-type: none;
        align-items: center;
        right: 0rem;
        justify-content: space-evenly;
        top: 35px;
        height: 200px;
        // right: 0px;
        position: absolute;
        li a {
          margin-right: 40px;
          display: block;
        }
      }
    }
    .toggle-nav {
      display: flex;
      justify-content: center;
      align-items: center;
      grid-column-start: 12;
      grid-row-start: 1;
      background: yellow;
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
    .account {
      align-items: center;
      justify-content: space-evenly;
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
      &:hover ul.list-dropdown {
        display: flex;
        visibility: visible;
        opacity: 1;
      }
      ul.list-dropdown {
        visibility: hidden;
        opacity: 0;
        transition: all 0.3s ease;
        width: auto;
        height: auto;
        flex-direction: column;
        background: rgb(255, 0, 0);
        list-style-type: none;
        align-items: center;
        justify-content: center;
        top: 35px;
        // right: 0px;
        position: absolute;
        li a {
          margin-right: 40px;
          display: block;
        }
      }
    }
    a {
      padding: 10px 15px;
      color: black !important;
      text-decoration: none;
    }
    .account {
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
