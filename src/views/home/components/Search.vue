<template>
  <div class="search">
    <div class="img">
      <img v-show="searchType === 'baidu'" src="~_img/home/baidu.png" />
      <img v-show="searchType === '360'" src="~_img/home/360.png" />
      <img v-show="searchType === 'sougou'" src="~_img/home/sougou.png" />
      <img v-show="searchType === 'bing'" src="~_img/home/bing.png" />
      <img v-show="searchType === 'google'" src="~_img/home/google.png" />
    </div>
    <div class="search-content">
      <div class="est_switch">
        <div
          v-for="item in searchList"
          :class="{
            'est-selected': true,
            'est-active': searchType === item.value
          }"
          :key="item.value"
          @click="ClickSearchType(item.value)"
        >
          <span>{{ item.label }}</span>
        </div>
      </div>
      <Input
        v-model="inputValue"
        placeholder=""
        class="search-input"
        @keyup.enter.native="search"
      />
    </div>
    <Button type="primary" icon="ios-search" class="search-btn" @click="search">
      SEARCH
    </Button>
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      searchList: [
        {
          label: "百度",
          value: "baidu"
        },
        {
          label: "360搜索",
          value: "360"
        },
        {
          label: "搜狗搜索",
          value: "sougou"
        },
        {
          label: "bing搜索",
          value: "bing"
        },
        {
          label: "google搜索",
          value: "google"
        }
      ],
      searchType: "baidu",
      inputValue: ""
    };
  },
  methods: {
    ClickSearchType(val) {
      this.searchType = val;
    },
    search() {
      switch (this.searchType) {
        case "baidu":
          window.open(`https://www.baidu.com/s?ie=UTF-8&wd=${this.inputValue}`);
          break;
        case "360":
          window.open(`https://www.so.com/s?ie=utf-8&q=${this.inputValue}`);
          break;
        case "sougou":
          window.open(
            `https://www.sogou.com/web?ie=utf8&query=${this.inputValue}`
          );
          break;
        case "bing":
          window.open(`https://cn.bing.com/search?q=${this.inputValue}`);
          break;
        case "google":
          window.open(`https://www.google.com/search?q=${this.inputValue}`);
          break;
      }
    }
  }
};
</script>

<style scoped lang="scss">
.search {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 180px;
  margin-bottom: 100px;
  .img {
    width: 150px;
    height: 50px;
    margin-right: 10px;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.7);
    img {
      height: 100%;
      width: 100%;
    }
  }
  .search-content {
    position: relative;
    .est_switch {
      position: absolute;
      bottom: 50px;
      display: flex;
      .est-selected {
        position: relative;
        box-sizing: border-box;
        cursor: pointer;
        padding: 0 10px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        background: rgba(255, 255, 255, 0.8);
        background: #ececec;
        border-top-left-radius: 5px;
        z-index: 1;
        margin-right: 18px;
        span {
          position: relative;
          z-index: 10;
          padding-left: 10px;
          color: #666666;
          font-size: 16px;
        }
        &::after {
          content: "";
          display: block;
          width: 60px;
          height: 40px;
          position: absolute;
          transform: skewX(20deg);
          background: #ececec;
          border-top-right-radius: 12px;
          top: 0px;
          right: -20px;
        }
      }
      .est-active {
        background: #ffffff;
        border-bottom: none;

        z-index: 2;
        span {
          color: #444444;
          font-size: 18px;
        }
        &::after {
          background: #ffffff;
          z-index: 0;
        }
      }
    }
    .search-input {
      width: 680px;
      height: 50px;
      border-top-left-radius: 0;
      /deep/input {
        height: 100%;
        font-size: 18px;
        border: none;
        border-top-right-radius: 0;
        border-top-left-radius: 0;
        border-bottom-right-radius: 0;
        &:hover {
          border: none;
        }
      }
      /deep/.ivu-input:focus {
        outline: none;
        box-shadow: none;
        border: none;
      }
    }
  }
  .search-btn {
    height: 50px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
}
</style>
