<template>
  <section>
    <div class="container">
      <h2>Blogs is updated</h2>
      <div class="grid">
        <div class="card" v-for="blog in blogs" :key="blog._id">
          <router-link :to="`/blogs/${blog._id}`">
          <div class="card-header">
            <img :src="blog.image" alt="" />
          </div>
          <div class="card-body">
            <div class="card-text-header">
              <div class="text-1">
                <h2>{{blog.title}}</h2>
                <small>{{blog.createdAt.slice(0, 10)}}</small>
              </div>
              <p class="author">{{blog.author}}</p>
            </div>
            <div class="content-text">
              <p>{{ cutText(blog.description) }}</p>
            </div>
          </div>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      blogs: null
    }
  },
  methods: {
    ...mapActions(['listBlogs', 'getToken']),
    cutText (text) {
      return (text.length > 379) ? text.slice(0, 379) + ' ...' : text
    }
  },
  async mounted () {
    const blog = await this.listBlogs()
    this.blogs = blog.data.result
  }
}
</script>

<style lang="scss" scoped>
h2 {
  text-align: center;
}
.container {
  display: grid;
  margin: 20px auto;
}
.grid {
  display: grid;
  gap: 50px;
}
.card {
  border: 1px solid grey;
  padding: 10px;
  border-radius: 20px;
  .card-header {
    margin: auto;
    width: 30%;
    img {
      width: 100%;
    }
  }
  .card-body {
    display: grid;
    > div {
      display: flex;
      justify-content: space-between;
      .text-1 {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0;
        flex-direction: column;

        small {
          color: rgb(170, 165, 165);
        }
      }
    }
  }
}
@media screen and (max-width: 576px) {
  .grid {
    grid-template-columns: repeat(1, 70%);
    justify-content: center;
  }
}
@media screen and (min-width: 576px) {
  .grid {
    grid-template-columns: repeat(1, 50%);
    justify-content: center;
  }
}
@media screen and (min-width: 1200px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
    margin: 0 5rem;
  }
}
@media screen and (min-width: 1400px) {
  .grid {
    margin: 0 15rem;
  }
}
</style>
