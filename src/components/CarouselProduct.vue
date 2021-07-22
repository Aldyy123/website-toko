<template>
  <section class="slider">
    <div class="button-slide preview" @click="prev">
      <img src="@/assets/left-nav.svg" alt="">
    </div>
    <div class="slide-track" ref="slide-track">
      <div class="slide" v-for="(image, index) in images" :key="image" ref="slide">
        <img
          :src="image"
          :alt="`image${index}`"
          @click="previewImage"
        />
      </div>
    </div>
    <div class="button-slide next" @click="next" ref="next">
      <img src="@/assets/right-nav.svg" alt="">
    </div>
  </section>
</template>

<script>
export default {
  name: 'carousel-products',
  emits: ['overview'],
  props: ['images'],
  data () {
    return {
      index: 0
    }
  },
  computed: {
    perkalian () {
      return this.index * 200
    },
    totalImagebagi () {
      return Math.ceil(this.images.length / 2)
    }
  },
  methods: {
    next () {
      if (this.totalImagebagi <= this.index) {
        this.index = 0
        this.$refs['slide-track'].style.transform = 'translate(0px)'
      } else {
        this.index++
        this.$refs['slide-track'].style.transform = `translate(-${this.perkalian}px)`
      }
    },
    prev () {
      if (this.index >= 1) {
        this.index--
        this.$refs['slide-track'].style.transform = `translate(-${this.perkalian}px)`
      } else {
        this.index = this.totalImagebagi
        this.$refs['slide-track'].style.transform = `translate(-${this.totalImagebagi * 200}px)`
      }
    },
    previewImage (event) {
      this.$emit('overview', event.target.src)
    }
  }
}
</script>

<style lang="scss" scoped>
.slider{
  position:relative;
  height: 15rem;
  width: 100%;
  background: rgb(183, 196, 196);
  display: grid;
  place-items: center;
  overflow: hidden;
}
.slide-track{
  display:flex;
  width: calc(200px * 4);
  transition: transform 1s ease;
}
.slide{
  display:flex;
  align-items: center;
  padding: 10px;
  height: 10rem;
  img{
    width: 100%;
  }
}
.button-slide{
  position: absolute;
  cursor: pointer;
  z-index: 9999999999999999999;
  img{
    width: 50px;
  }
}
.preview{
  left: -10px;
}
.next{
  right: -10px;
}
</style>
