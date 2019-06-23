<template>
  <div>
    <app-header>
      <h1>Blog</h1>
    </app-header>
    <div class="container" v-if="blogs">
      <app-card v-for="blog in blogs" :key="blog.id" :data="blog"></app-card>
    </div>
    <div class='load-btn' v-if="blogs && blogs.length < total">
      <button type='button' @click="loadMore">Load More</button>
    </div>
  </div>
</template>

<script>

import AppHeader from '../components/app-header.vue';
import AppCard from '../components/app-card.vue';
import axios from 'axios';

export default {
  data() {
    return {
      'blogs' : null,
      page: 1,
      total: null,
    };
  },
  components: {
    AppHeader,
    AppCard,
  },
  mounted(){
    this.getBlogs(this.page);
  },
  methods: {
    getBlogs(page) {
      axios.get(`http://localhost:3000/blog?_page=${page}&_limit=6`).then((res) => {
        this.blogs = this.blogs ? this.blogs.concat(res.data) : res.data;
        this.total = res.headers['x-total-count'];
      })
    },
    loadMore() {
      this.page++;
      this.getBlogs(this.page);
    }
  },
}
</script>

<style lang='scss'>

.container {
  max-width: 1024px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  padding: 0 15px;
}

.load-btn {
  text-align: center;
  button {
    font-size: 18px;
    margin-bottom: 50px;
    margin-top: 50px;
    line-height: 1;
    color: #fff;
    background-color: #09c;
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
}

</style>
