<template>
  <div class="News2">
    <h1>{{ news.title }}</h1>
    <p>{{ news.content }}</p>
    <router-link class="Backto" to="/">Back to news list</router-link>
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
        { id: 1, title: 'News 1', content: 'В Перми обнаружили кота, который неудачно зевнул и вывихнул челюсть. Пушистому поставили челюсть в естественное положение,и сейчас он идёт на поправку.' },
        { id: 2, title: 'News 2', content: 'Добрый день!Сегодня прогноз погоды:будет солнечно. Будет довольно тепло'},
        { id: 3, title: 'News 3', content: 'Сегодня сообщили точную дату выхода всеми ожидаемой игры Spore 2' },
      ];
    },
  },
  created() {
    const newsId = parseInt(this.$route.params.id, 10);
    this.news = this.newsList.find(news => news.id === newsId);
  },
};
</script>
<style>
.News2{
 color: rgb(0, 0, 0);
 text-decoration: none;
}

.Backto{
  color: rgb(3, 2, 59);
  text-decoration: none;
}
</style>