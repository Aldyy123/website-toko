<template>
  <main>
    <div class="filter-product">
      <div class="sort-by">
        <label for="sort">Sort</label>
        <select name="sort" id="sort" v-model="sort">
          <option value="dateasc">Terbaru</option>
          <option value="datedesc">Terlama</option>
          <option value="priceasc">Termurah</option>
          <option value="pricedesc">Termahal</option>
        </select>
      </div>
      <div class="search-product">
        <label for="search">Search</label>
        <input type="text" name="search" autocomplete="off" @keypress.enter="getSearch" placeholder="Masukan pencarian">
      </div>
    </div>
    <list-products :search='search' :sort="sort"></list-products>
  </main>
    <footer-component></footer-component>
</template>

<script>
/* eslint-disable no-unused-vars */
import ListProducts from '@/components/ListProducts'
import FooterComponent from '@/components/FooterComponent'
import { ref } from 'vue'

export default {
  components: {
    FooterComponent,
    ListProducts
  },
  setup () {
    const search = ref()
    const sort = ref('dateasc')
    const getSearch = ($event) => {
      if ($event.key === 'Enter') {
        search.value = $event.target.value
      }
    }
    return {
      sort,
      search,
      getSearch
    }
  }
}
</script>

<style lang="scss" scoped>
input{
      padding: 5px;
      outline: none;
      &:focus{
        outline: none;
      }
    }
    select{
      // margin-left: 10px;
      padding: 5px;
    }
    .sort-by{
    // background: rgb(106, 106, 179);
    display: grid;
    grid-template-columns: 100px 120px;
    font-size: 20pt;
  }
@media only screen and (max-width: 576px) {
.filter-product{
  grid-template-columns: 100%;
  // background: hotpink;
  display: grid;
  .sort-by{
    grid-row-start: 2;
  }
  .search-product{
    display: grid;
    grid-template-columns: 1fr;
    text-align: center;
    font-size: 20pt;

    input{
      padding: 5px;
      outline: none;
      &:focus{
        outline: none;
      }
    }
  }
}
}
@media only screen and (min-width: 576px) {
.filter-product{
  display: grid;
  grid-template-columns: 100%;
  padding: 10px;
  justify-content: space-around;
  // background: salmon;
  .sort-by{
    grid-row-start: 2;
  }
  .search-product{
    display: grid;
    grid-template-columns: 100px 60%;
    font-size: 17pt;
  }
}
}
@media only screen and (min-width: 768px) {
.filter-product{
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-evenly;
  // background: rosybrown;

  .search-product{
    display: grid;
    grid-column-start: 2;
    grid-template-columns: 100px 20rem;
  }
  .sort-by{
    grid-row-start: 1;
  }
}
}
</style>
