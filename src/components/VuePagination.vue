<template>
<section>
  <div class="container-pagination">
    <ul class="pagination">
      <li v-if="hasPrev" class="prev">
        <a @click.prevent="changePage(prevPage)">Preview</a>
      </li>
      <li v-for="page in pages" :key="page">
        <a @click.prevent="changePage(page)">{{ page }}</a>
      </li>
      <li v-if="hasNext" class="next">
        <a @click.prevent="changePage(nextPage)">Next</a>
      </li>
    </ul>
  </div>
</section>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Vue Pagination',
  props: {
    current: {
      type: Number,
      default: 1
    },
    total: {
      type: Number,
      default: 0
    },
    perPage: {
      type: Number,
      default: 9
    },
    pageRange: {
      type: Number,
      default: 2
    },
    textBeforeInput: {
      type: String,
      default: 'Go to page'
    },
    textAfterInput: {
      type: String,
      default: 'Go'
    }
  },
  data () {
    return {
      input: ''
    }
  },
  methods: {
    hasFirst: function () {
      return this.rangeStart !== 1
    },
    hasLast: function () {
      return this.rangeEnd < this.totalPages
    },
    hasPrev: function () {
      return this.current > 1
    },
    hasNext: function () {
      return this.current < this.totalPages
    },
    changePage: function (page) {
      if (page > 0 && page <= this.totalPages) {
        this.$emit('page-changed', page)
      }
    }
  },
  computed: {
    pages: function () {
      var pages = []
      for (var i = this.rangeStart; i <= this.rangeEnd; i++) {
        pages.push(i)
      }
      return pages
    },
    rangeStart: function () {
      var start = this.current - this.pageRange
      return (start > 0) ? start : 1
    },
    rangeEnd: function () {
      var end = this.current + this.pageRange
      return (end < this.totalPages) ? end : this.totalPages
    },
    totalPages: function () {
      return Math.ceil(this.total / this.perPage)
    },
    nextPage: function () {
      return this.current + 1
    },
    prevPage: function () {
      return this.current - 1
    }
  }
})
</script>

<style scoped lang="scss">
.container-pagination{
  background: salmon;
  display: grid;
  .pagination{
    display: flex;
    justify-content: center;
    li{
      padding: 10px;
      border: 1px solid #ccc;

      a{
        cursor: pointer;
      }
    }
  }
}
</style>
