import Axios from "./ajax";

// https://api.abcyun.co/  pass: vison123
// https://api.abcyun.co/api/tool/yiyan/token/5ea136920e1fa

// 获取语录
export const marqueeInfo = params => {
  return Axios.get(
    "/MARQUEE_URL",
    params
  ).then(res => res.data);
};


