<template>
  <div>
    <h1>{{ news.title }}</h1>
    <p>{{ news.content }}</p>
    <router-link to="/">Back to news list</router-link>
  </div>
</template>

<script>
export default {
  name: 'NewsDetail',
  data() {
    return {
      news: null,
    };
  },
  computed: {
    newsList() {
      return [
        { id: 1, title: 'News 1', content: 'Content of News 1' },
        { id: 2, title: 'News 2', content: 'Content of News 2' },
        { id: 3, title: 'News 3', content: 'Content of News 3' },
      ];
    },
  },
  created() {
    const newsId = parseInt(this.$route.params.id, 10);
    this.news = this.newsList.find(news => news.id === newsId);
  },
};
</script>
