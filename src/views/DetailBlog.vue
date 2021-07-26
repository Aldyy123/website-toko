<template>
  <section>
    <div class="image">
      <img src="@/assets/logo.png" alt="s">
    </div>
    <div class="text-header">
      <div class="text-1">
        <h2>{{blog.title}}</h2>
        <small>{{ blog.createdAt }}</small>
      </div>
      <div class="text-author">
        <p>{{ blog.author }}</p>
      </div>
    </div>
    <div class="description">
      <p>{{ blog.description }}</p>
    </div>
  </section>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'detail-blog',
  data () {
    return {
      blog: {},
      status: {}
    }
  },
  methods: {
    ...mapActions(['getBlog'])
  },
  mounted () {
    this.getBlog(this.$route.params.id).then(result => {
      this.blog = result.data.result
      this.status = result.data
    })
  }
}
</script>

<style lang="scss" scoped>
section{
  display: grid;
  justify-content:center;
  .image{
    place-items: center;
    width: 100%;
    display: flex;
    justify-content: center;
    img{
      width: 50%;
      margin: 0 auto;
    }
  }

  .text-header{
    display: flex;
    justify-content: space-between;
  }
}

@media screen and (min-width: 576px){
  section{
    margin: 0 3rem;
  }
}
@media screen and (min-width: 768px){
  section{
    margin: 0 6rem;
  }
}
@media screen and (min-width: 992px){
  section{
    margin: 0 10rem;
  }
}
@media screen and (min-width: 1200px){
  section{
    margin: 0 15rem;
    .image{
      width: 50%;
      justify-self: center;
    }
  }
}
@media screen and (min-width: 1500px){
  section{
    margin: 0 20rem;

    .image{
      width: 50%;
      justify-self: center;
    }
  }
}
</style>
