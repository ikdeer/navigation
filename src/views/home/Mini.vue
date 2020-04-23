<template>
  <div class="mini">
    <Header />
    <search />
  </div>
</template>

<script>
import Header from "./components/Header";
import Search from "./components/Search";
export default {
  name: "Mini",
  components: {
    Header,
    Search
  }
};
</script>

<style scoped lang="scss">
.mini {
  height: 100vw;
  background: url("https://uploadbeta.com/api/pictures/random/?key=BingEverydayWallpaperPicture")
    no-repeat;
  background-size: percentage;
}
</style>
