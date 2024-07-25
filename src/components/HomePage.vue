<template>
  <div class="body__home">
    <h1>News List</h1>
    <ul>
      <li v-for="news in newsList" :key="news.id">
        <router-link :to="'/news/' + news.id">{{ news.title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      newsList: [
        { id: 1, title: 'Новость про животных' },
        { id: 2, title: 'Погода' },
        { id: 3, title: 'Новость про игры'},
      ],
    };
  },
};
</script>
<style>
.body__home{
  color: black;
  text-decoration: none;
}

#HomePaege{
  text-decoration: none;
}
</style>
