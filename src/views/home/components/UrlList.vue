<template>
  <div class="url-list">
    <div class="frequently">
      <div class="frequently-list">
        <img src="~_img/logo.png" alt="" />
        <span>啦啦啦</span>
      </div>
      <div class="frequently-list">
        <img src="~_img/logo.png" alt="" />
        <span>啦啦啦</span>
      </div>
      <div class="frequently-list">
        <img src="~_img/logo.png" alt="" />
        <span>啦啦啦</span>
      </div>
      <div class="frequently-list">
        <img src="~_img/logo.png" alt="" />
        <span>啦啦啦</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UrlList",
  data() {
    return {
      frequentlyList: [
        {
          label: "腾讯视频",
          imageUrl: ""
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.url-list {
  width: 1200px;
  margin: 0 auto;
  margin-top: 60px;
  .frequently {
    display: flex;
    justify-content: center;
    .frequently-list {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border: 1px dashed #ececec;
      border-radius: 12px;
      margin: 0 20px;
      img {
        width: 30px;
        height: 30px;
      }
      width: 120px;
      height: 90px;
      background: rgba(255, 255, 255, 0.8);
    }
  }
}
</style>
