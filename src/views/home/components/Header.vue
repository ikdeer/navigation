<template>
  <div class="header">
    <div class="content">
      <div class="icon" @click="goHome">
        <img src="~_img/home/logo.png" alt="" />
      </div>
      <div class="tab">
        <div :class="{ item: true, active: isTab }" @click="goHome">首页</div>
        <div :class="{ item: true, active: !isTab }" @click="goMini">
          精简版
        </div>
      </div>
      <div class="time">
        <span class="date">{{ currentTime.curYear }}</span>
        <span>年</span>
        <span class="date">{{ currentTime.curMonth }}</span>
        <span>月</span>
        <span class="date">{{ currentTime.curDay }}</span>
        <span>日</span>
        <span class="date-time">
          {{ currentTime.curHour }}:{{ currentTime.curMinute }}
        </span>
        <span>{{ currentTime.curWeekDay | curWeekDay }}</span>
      </div>
      <div class="marqueeWrap">
        <marquee scrollamount="3">{{ marqueeInfo }}</marquee>
      </div>
    </div>
  </div>
</template>

<script>
import { marqueeInfo } from "@/axios/api";

export default {
  name: "Header",
  data() {
    return {
      currentTime: {
        curYear: "",
        curMonth: "",
        curDay: "",
        curWeekDay: "",
        curHour: "",
        curMinute: "",
        curSec: ""
      },
      marqueeInfo: ""
    };
  },
  computed: {
    isTab() {
      return this.$route.name === "Home";
    }
  },
  mounted() {
    this.getTime();
    this.getMarqueeInfo();
  },
  methods: {
    goHome() {
      this.$router.push("/");
    },
    goMini() {
      this.$router.push("/mini");
    },
    getTime() {
      const curDate = new Date();
      let curYear = curDate.getFullYear(); //获取完整的年份(4位,1970-????)
      let curMonth = curDate.getMonth() + 1; //获取当前月份(0-11,0代表1月)
      let curDay = curDate.getDate(); //获取当前日(1-31)
      let curWeekDay = curDate.getDay(); //获取当前星期X(0-6,0代表星期天)
      let curHour = curDate.getHours(); //获取当前小时数(0-23)
      let curMinute = curDate.getMinutes(); // 获取当前分钟数(0-59)
      let curSec = curDate.getSeconds(); //获取当前秒数(0-59)
      if (curMonth < 10) {
        curMonth = "0" + curMonth;
      }
      if (curDay < 10) {
        curDay = "0" + curDay;
      }
      if (curHour < 10) {
        curHour = "0" + curHour;
      }
      if (curMinute < 10) {
        curMinute = "0" + curMinute;
      }
      if (curSec < 10) {
        curSec = "0" + curSec;
      }
      this.currentTime = {
        curYear,
        curMonth,
        curDay,
        curWeekDay,
        curHour,
        curMinute,
        curSec
      };
      setTimeout(() => {
        this.getTime();
      }, 1000);
    },
    getMarqueeInfo() {
      marqueeInfo()
        .then(res => {
          this.marqueeInfo = `${res.hitokoto}--《${res.from}》`;
        })
        .catch(() => {
          this.marqueeInfo = "开心快乐每一天！";
        });
    }
  },
  filters: {
    curWeekDay(val) {
      if (val === 0) {
        return "周日";
      }
      if (val === 1) {
        return "周一";
      }
      if (val === 2) {
        return "周二";
      }
      if (val === 3) {
        return "周三";
      }
      if (val === 4) {
        return "周四";
      }
      if (val === 5) {
        return "周五";
      }
      if (val === 6) {
        return "周六";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.header {
  background: rgba(255, 255, 255, 0.8);
  height: 60px;
  box-shadow: rgba(228, 228, 228, 0.5) 0px 2px 3px;
  .content {
    box-sizing: border-box;
    width: 1200px;
    height: 60px;
    margin: 0 auto;
    display: flex;
    align-items: center;

    .icon {
      padding-top: 6px;
      img {
        width: 40px;
        height: 40px;
      }
    }
    .tab {
      height: 100%;
      display: flex;
      .item {
        cursor: pointer;
        box-sizing: border-box;
        height: 60px;
        line-height: 60px;
        width: 60px;
        text-align: center;
        font-size: 16px;
      }
      .active {
        color: #2d8cf0;
        border-bottom: 3px solid #5cadff;
      }
    }
    .time {
      margin-left: 30px;
      color: #666666;
      span {
        margin: 2px;
      }
      .date {
        font-size: 22px;
        font-weight: 700;
      }
      .date-time {
        margin-left: 8px;
        font-weight: 600;
      }
    }
    .marqueeWrap {
      flex: 1;
      padding-left: 100px;
    }
  }
}
</style>
