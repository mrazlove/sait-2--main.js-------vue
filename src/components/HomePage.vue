<template>
  <div>
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
        { id: 1, title: 'News 1' },
        { id: 2, title: 'News 2' },
        { id: 3, title: 'News 3' },
      ],
    };
  },
};
</script>
