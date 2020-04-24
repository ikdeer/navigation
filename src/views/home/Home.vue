<template>
  <div class="home">
    <Header />
    <search />
    <url-list />
    <div class="footer">
      <div>
        江城如画里，山晓望晴空。 两水夹明镜，双桥落彩虹。
        人烟寒橘柚，秋色老梧桐。
      </div>
    </div>
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
    return {};
  },
  methods: {}
};
</script>
<style scoped lang="scss">
.home {
  height: 100%;
  overflow: auto;
  background: url("https://uploadbeta.com/api/pictures/random/?key=BingEverydayWallpaperPicture")
    no-repeat;
  background-size: percentage;

  .footer {
    background: rgba(0, 0, 0, 0.8);
    div {
      height: 100px;
      line-height: 100px;
      text-align: center;
      color: #b8b8b8;
      font-size: 18px;
      width: 1200px;
      margin: 0 auto;
    }
  }
}
</style>
