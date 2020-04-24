<template>
  <div class="url-list">
    <div class="frequently">
      <Card
        v-for="item in frequentlyList"
        :key="item.label"
        class="frequently-card"
      >
        <a :href="item.link" target="_blank" class="frequently-list">
          <img :src="item.imageUrl" />
          <div class="label">{{ item.label }}</div>
        </a>
      </Card>
    </div>

    <div class="site">
      <div v-for="item in siteList" :key="item.label" class="site-classify">
        <div class="classify-title">
          <i :class="item.icon"></i>
          <span>{{ item.label }}</span>
        </div>
        <div class="card">
          <div v-for="ins in item.list" :key="ins.label" class="list">
            <a :href="ins.link" target="_blank">{{ ins.label }}</a>
          </div>
        </div>
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
          label: "CSDN",
          imageUrl: "/images/csdn.png",
          link: "https://www.csdn.net"
        },
        {
          label: "简书",
          imageUrl: "/images/jianshu.png",
          link: "https://www.jianshu.com"
        },
        {
          label: "知乎",
          imageUrl: "/images/zhihu.png",
          link: "https://www.zhihu.com"
        },
        {
          label: "腾讯视频",
          imageUrl: "/images/tengxunshipin.png",
          link: "https://v.qq.com"
        },
        {
          label: "斗鱼直播",
          imageUrl: "/images/douyu.png",
          link: "https://www.douyu.com"
        },
        {
          label: "虎牙直播",
          imageUrl: "/images/huya.png",
          link: "https://www.huya.com"
        }
      ],
      siteList: [
        {
          label: "视频",
          icon: "ivu-icon ivu-icon-logo-youtube",
          list: [
            {
              label: "爱奇艺高清",
              link: "http://www.iqiyi.com"
            },
            {
              label: "优酷网",
              link: "http://www.youku.com"
            },
            {
              label: "百度视频",
              link: "http://v.baidu.com"
            },
            {
              label: "腾讯视频",
              link: "http://v.qq.com"
            },
            {
              label: "芒果TV",
              link: "http://www.mgtv.com"
            },
            {
              label: "热点资讯",
              link: "http://www.hao123.com/video/zixun"
            },
            {
              label: "AcFun弹幕",
              link: "http://www.acfun.cn"
            },
            {
              label: "漫画大全",
              link: "http://www.hao123.com/manhua"
            }
          ]
        },
        {
          label: "新闻",
          icon: "ivu-icon ivu-icon-logo-hackernews",
          list: [
            {
              label: "新浪新闻",
              link: "http://news.sina.com.cn"
            },
            {
              label: "腾讯新闻",
              link: "http://www.qq.com"
            },
            {
              label: "观察者网",
              link: "https://www.guancha.cn"
            },
            {
              label: "搜狐新闻",
              link: "http://news.sohu.com"
            },
            {
              label: "参考消息",
              link: "http://www.cankaoxiaoxi.com"
            },
            {
              label: "环球网",
              link: "http://www.huanqiu.com"
            },
            {
              label: "中华军事",
              link: "https://junshi.china.com/qd/haokz/top"
            },
            {
              label: "凤凰军事",
              link: "http://news.ifeng.com/mil"
            },
            {
              label: "米尔军事",
              link: "http://www.miercn.com"
            },
            {
              label: "头条新闻",
              link: "https://tuijian.hao123.com"
            }
          ]
        },
        {
          label: "游戏",
          icon: "ivu-icon ivu-icon-md-game-controller-b",
          list: [
            {
              label: "4399游戏",
              link: "http://www.4399.com"
            },
            {
              label: "7k7k游戏",
              link: "http://www.7k7k.com"
            },
            {
              label: "17173",
              link: "http://www.17173.com"
            },
            {
              label: "37网游",
              link: "http://www.37.com"
            },
            {
              label: "游民星空",
              link: "http://www.gamersky.com"
            },
            {
              label: "特权礼包",
              link: "https://game.hao123.com/card"
            },
            {
              label: "游侠网",
              link: "https://www.ali213.net"
            },
            {
              label: "hao123游戏",
              link: "https://game.hao123.com"
            }
          ]
        },
        {
          label: "购物",
          icon: "ivu-icon ivu-icon-md-cart",
          list: [
            {
              label: "淘宝",
              link: "https://www.taobao.com"
            },
            {
              label: "天猫",
              link: "https://www.tmall.com"
            },
            {
              label: "京东商城",
              link: "https://www.jd.com"
            },
            {
              label: "网易考拉",
              link: "https://www.kaola.com"
            },
            {
              label: "苏宁易购",
              link: "https://www.suning.com"
            },
            {
              label: "天猫超市",
              link: "https://chaoshi.tmall.com"
            },
            {
              label: "当当网",
              link: "http://www.dangdang.com"
            },
            {
              label: "蘑菇街",
              link: "http://www.mogujie.com"
            },
            {
              label: "唯品会",
              link: "https://www.vip.com"
            },
            {
              label: "1688",
              link: "https://www.1688.com"
            }
          ]
        },
        {
          label: "旅游",
          icon: "ivu-icon ivu-icon-ios-plane",
          list: [
            {
              label: "携程网",
              link: "https://www.ctrip.com"
            },
            {
              label: "艺龙旅行网",
              link: "http://www.elong.com"
            },
            {
              label: "飞猪旅行",
              link: "https://www.fliggy.com"
            },
            {
              label: "12306",
              link: "https://www.12306.cn"
            },
            {
              label: "马蜂窝",
              link: "http://www.mafengwo.cn"
            },
            {
              label: "途牛",
              link: "http://www.tuniu.com"
            },
            {
              label: "穷游网",
              link: "http://www.qyer.com"
            },
            {
              label: "驴妈妈",
              link: "http://www.lvmama.com"
            },
            {
              label: "同程网",
              link: "https://www.ly.com"
            }
          ]
        },
        {
          label: "体育",
          icon: "ivu-icon ivu-icon-md-football",
          list: [
            {
              label: "新浪体育",
              link: "http://sports.sina.com.cn"
            },
            {
              label: "搜狐体育",
              link: "http://sports.sohu.com"
            },
            {
              label: "CCTV5",
              link: "http://sports.cntv.cn"
            },
            {
              label: "虎扑体育",
              link: "https://www.hupu.com"
            },
            {
              label: "直播吧",
              link: "http://www.zhibo8.cc"
            },
            {
              label: "网易体育",
              link: "http://sports.163.com"
            },
            {
              label: "腾讯体育",
              link: "http://sports.qq.com"
            },
            {
              label: "凤凰体育",
              link: "http://sports.ifeng.com"
            },
            {
              label: "爱奇艺体育",
              link: "http://sports.iqiyi.com"
            }
          ]
        },
        {
          label: "小说",
          icon: "ivu-icon ivu-icon-ios-book",
          list: [
            {
              label: "喜马拉雅",
              link: "https://www.ximalaya.com"
            },
            {
              label: "起点中文",
              link: "http://www.qidian.com"
            },
            {
              label: "飞卢小说",
              link: "https://b.faloo.com"
            },
            {
              label: "潇湘书院",
              link: "http://www.xxsy.net"
            },
            {
              label: "小说阅读",
              link: "http://www.readnovel.com"
            },
            {
              label: "晋江文学城",
              link: "http://www.jjwxc.net"
            },
            {
              label: "懒人听书",
              link: "http://www.lrts.me"
            },
            {
              label: "纵横中文网",
              link: "http://www.zongheng.com"
            }
          ]
        },
        {
          label: "手机",
          icon: "ivu-icon ivu-icon-md-phone-portrait",
          list: [
            {
              label: "中关村在线",
              link: "http://www.zol.com.cn"
            },
            {
              label: "太平洋手机",
              link: "http://mobile.pconline.com.cn"
            },
            {
              label: "IT之家",
              link: "http://www.ithome.com"
            },
            {
              label: "移动",
              link: "http://www.10086.cn"
            },
            {
              label: "电信",
              link: "http://www.189.cn"
            },
            {
              label: "联通",
              link: "http://www.10010.com/"
            },
            {
              label: "苹果手机",
              link: "https://www.apple.com/cn"
            },
            {
              label: "华为官网",
              link: "https://www.vmall.com"
            },
            {
              label: "小米官网",
              link: "http://www.mi.com"
            }
          ]
        },
        {
          label: "社交",
          icon: "ivu-icon ivu-icon-md-cafe",
          list: [
            {
              label: "微博",
              link: "https://weibo.com"
            },
            {
              label: "百度贴吧",
              link: "https://tieba.baidu.com"
            },
            {
              label: "QQ空间",
              link: "http://qzone.qq.com"
            },
            {
              label: "豆瓣",
              link: "https://www.zhihu.com"
            },
            {
              label: "猫扑",
              link: "http://www.mop.com"
            },
            {
              label: "天涯",
              link: "http://www.tianya.cn"
            }
          ]
        },
        {
          label: "生活",
          icon: "ivu-icon ivu-icon-md-basket",
          list: [
            {
              label: "安居客",
              link: "https://www.anjuke.com"
            },
            {
              label: "房天下",
              link: "http://www.fang.com"
            },
            {
              label: "链家网",
              link: "http://www.lianjia.com"
            },
            {
              label: "赶集网",
              link: "http://www.ganji.com"
            },
            {
              label: "百姓网",
              link: "http://www.baixing.com"
            },
            {
              label: "下厨房",
              link: "http://www.xiachufang.com"
            },
            {
              label: "大众点评",
              link: "http://www.dianping.com"
            },
            {
              label: "58同城",
              link: "https://www.58.com"
            },
            {
              label: "天眼查",
              link: "https://www.tianyancha.com"
            },
            {
              label: "启信宝",
              link: "https://www.qixin.com"
            },
            {
              label: "慧聪网",
              link: "https://www.hc360.com"
            }
          ]
        },
        {
          label: "综合",
          icon: "ivu-icon ivu-icon-md-filing",
          list: [
            {
              label: "千图网",
              link: "https://www.58pic.com"
            },
            {
              label: "百度文库",
              link: "https://wenku.baidu.com"
            },
            {
              label: "CSDN社区",
              link: "https://www.csdn.net"
            },
            {
              label: "有道词典",
              link: "http://dict.youdao.com"
            },
            {
              label: "动漫之家",
              link: "https://manhua.dmzj.com"
            },
            {
              label: "腾讯动漫",
              link: "https://ac.qq.com"
            },
            {
              label: "征信中心",
              link: "http://www.pbccrc.org.cn"
            },
            {
              label: "豆丁网",
              link: "https://www.docin.com"
            },
            {
              label: "爱站网",
              link: "https://www.aizhan.com"
            }
          ]
        },
        {
          label: "招聘",
          icon: "ivu-icon ivu-icon-md-laptop",
          list: [
            {
              label: "BOOS直聘",
              link: "https://www.zhipin.com"
            },
            {
              label: "智联招聘",
              link: "https://cnt.zhaopin.com"
            },
            {
              label: "前程无忧",
              link: "http://www.51job.com"
            },
            {
              label: "猎聘",
              link: "https://www.liepin.com"
            },
            {
              label: "应届生求职",
              link: "http://www.yingjiesheng.com"
            },
            {
              label: "中华英才",
              link: "http://www.chinahr.com"
            },
            {
              label: "拉勾",
              link: "https://www.lagou.com"
            },
            {
              label: "大街",
              link: "https://www.dajie.com"
            },
            {
              label: "实习僧",
              link: "https://www.shixiseng.com"
            },
            {
              label: "看准网",
              link: "https://www.kanzhun.com"
            }
          ]
        },
        {
          label: "汽车",
          icon: "ivu-icon ivu-icon-ios-car",
          list: [
            {
              label: "汽车之家",
              link: "https://www.autohome.com.cn"
            },
            {
              label: "太平洋汽车",
              link: "http://www.pcauto.com.cn"
            },
            {
              label: "易车网",
              link: "http://www.bitauto.com"
            },
            {
              label: "汽车大全",
              link: "http://www.hao123.com/auto"
            },
            {
              label: "新浪汽车",
              link: "http://auto.sina.com.cn"
            },
            {
              label: "驾校一点通",
              link: "http://www.jxedt.com"
            },
            {
              label: "凤凰汽车",
              link: "http://auto.ifeng.com"
            },
            {
              label: "爱卡汽车",
              link: "http://www.xcar.com.cn"
            },
            {
              label: "搜狐汽车",
              link: "http://auto.sohu.com"
            },
            {
              label: "腾讯汽车",
              link: "http://auto.qq.com"
            },
            {
              label: "瓜子二手车",
              link: "https://www.guazi.com/"
            }
          ]
        },
        {
          label: "音乐",
          icon: "ivu-icon ivu-icon-ios-musical-notes",
          list: [
            {
              label: "网易云音乐",
              link: "http://music.163.com"
            },
            {
              label: "酷狗音乐",
              link: "http://www.kugou.com"
            },
            {
              label: "QQ音乐",
              link: "http://y.qq.com"
            },
            {
              label: "酷我音乐",
              link: "http://www.kuwo.cn"
            },
            {
              label: "唱吧",
              link: "http://changba.com"
            },
            {
              label: "虾米音乐",
              link: "http://www.xiami.com"
            },
            {
              label: "咪咕音乐",
              link: "http://music.migu.cn"
            },
            {
              label: "千千音乐",
              link: "http://music.taihe.com"
            },
            {
              label: "音悦台",
              link: "http://www.yinyuetai.com"
            }
          ]
        },
        {
          label: "财经",
          icon: "ivu-icon ivu-icon-logo-yen",
          list: [
            {
              label: "东方财富",
              link: "http://www.eastmoney.com"
            },
            {
              label: "新浪财经",
              link: "http://finance.sina.com.cn"
            },
            {
              label: "证券之星",
              link: "http://www.stockstar.com"
            },
            {
              label: "中金在线",
              link: "http://www.cnfol.com"
            },
            {
              label: "凤凰财经",
              link: "http://finance.ifeng.com"
            },
            {
              label: "金融界",
              link: "http://www.jrj.com.cn"
            },
            {
              label: "和讯网",
              link: "http://www.hexun.com"
            },
            {
              label: "雪球",
              link: "http://xueqiu.com"
            },
            {
              label: "股吧",
              link: "http://guba.eastmoney.com"
            },
            {
              label: "第一财经",
              link: "https://www.yicai.com"
            },
            {
              label: "全景网",
              link: "http://www.p5w.net"
            }
          ]
        },
        {
          label: "彩票",
          icon: "ivu-icon ivu-icon-md-paper",
          list: [
            {
              label: "中国体彩",
              link: "http://www.lottery.gov.cn"
            },
            {
              label: "新浪彩票",
              link: "http://lottery.sina.com.cn"
            },
            {
              label: "竞彩网",
              link: "http://www.sporttery.cn"
            },
            {
              label: "中国福彩网",
              link: "http://www.cwl.gov.cn"
            },
            {
              label: "搜狐彩票",
              link: "http://caipiao.sohu.com"
            },
            {
              label: "澳客网",
              link: "http://www.okooo.com"
            },
            {
              label: "500彩票",
              link: "http://zx.500.com"
            },
            {
              label: "中国足彩网",
              link: "http://www.zgzcw.com"
            },
            {
              label: "彩客网",
              link: "http://www.310win.com"
            }
          ]
        },
        {
          label: "银行",
          icon: "ivu-icon ivu-icon-ios-card",
          list: [
            {
              label: "工商银行",
              link: "http://www.icbc.com.cn"
            },
            {
              label: "建设银行",
              link: "http://www.ccb.com"
            },
            {
              label: "农业银行",
              link: "http://www.abchina.com"
            },
            {
              label: "中国银行",
              link: "http://www.boc.cn"
            },
            {
              label: "交通银行",
              link: "http://www.bankcomm.com"
            },
            {
              label: "招商银行",
              link: "http://www.cmbchina.com"
            },
            {
              label: "人民银行",
              link: "http://www.pbc.gov.cn"
            },
            {
              label: "兴业银行",
              link: "https://www.cib.com.cn"
            },
            {
              label: "浦发银行",
              link: "http://www.spdb.com.cn"
            }
          ]
        },
        {
          label: "邮箱",
          icon: "ivu-icon ivu-icon-md-at",
          list: [
            {
              label: "163邮箱",
              link: "http://mail.163.com"
            },
            {
              label: "126邮箱",
              link: "http://mail.126.com"
            },
            {
              label: "阿里邮箱",
              link: "http://mail.aliyun.com"
            },
            {
              label: "新浪邮箱",
              link: "http://mail.sina.com.cn"
            },
            {
              label: "QQ邮箱",
              link: "http://mail.qq.com"
            },
            {
              label: "139手机邮箱",
              link: "http://mail.10086.cn"
            },
            {
              label: "Outlook邮箱",
              link: "https://outlook.live.com"
            },
            {
              label: "搜狐邮箱",
              link: "https://mail.sohu.com"
            },
            {
              label: "阿里云",
              link: "https://www.aliyun.com"
            },
            {
              label: "百度网盘",
              link: "https://pan.baidu.com"
            }
          ]
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.url-list {
  background: rgba(255, 255, 255, 0.96);
  position: relative;
  box-sizing: border-box;
  .frequently {
    width: 1200px;
    left: 0;
    right: 0;
    margin: auto;
    position: absolute;
    top: -45px;
    display: flex;
    justify-content: center;
    .frequently-card {
      width: 120px;
      height: 90px;
      margin: 0 10px;
      .frequently-list {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        img {
          width: 30px;
          height: 30px;
        }
        .label {
          color: #666666;
        }
      }
    }
  }

  .site {
    width: 1200px;
    margin: 0 auto;
    padding-top: 50px;
    display: flex;
    flex-wrap: wrap;
    .site-classify {
      box-sizing: border-box;
      width: 400px;
      padding: 10px;
      &:hover {
        transition: box-shadow 0.5s;
        box-shadow: 0 26px 40px -24px rgba(0, 36, 100, 0.5);
      }
      .classify-title {
        height: 40px;
        line-height: 40px;
        font-weight: 600;
        font-size: 18px;
        border-bottom: 1px dashed #999999;
        margin-bottom: 10px;
        color: #2d8cf0;
        span {
          margin-left: 10px;
        }
      }

      .card {
        .list {
          display: inline-block;
          width: 126px;
          height: 30px;
          a {
            color: #666666;
            &:hover {
              color: #19be6b;
              text-decoration: underline;
            }
          }
        }
      }
    }
  }
}
</style>
