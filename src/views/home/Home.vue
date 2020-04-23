<template>
  <div class="home">
    <Header />
    <search />
    <url-list />
  </div>
</template>

<script>
import Header from "./components/Header";
import Search from "./components/Search";
import UrlList from "./components/UrlList";

export default {
  name: "Home",
  components: {
    UrlList,
    Header,
    Search
  },
  data() {
    return {

    };
  },
  methods: {

  }
};
</script>
<style scoped lang="scss">
.home {

}
</style>
