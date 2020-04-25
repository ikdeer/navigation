import Axios from "./ajax";

// https://api.abcyun.co/  pass: vison123
// https://api.abcyun.co/api/tool/yiyan/token/5ea136920e1fa

let base_url = "https://api.abcyun.co/api/tool/yiyan/token/5ea136920e1fa";
if (process.env.NODE_ENV === "development") {
  base_url = "/MARQUEE_URL";
}

// 获取语录
export const marqueeInfo = params => {
  return Axios.get(base_url, params).then(res => res.data);
};
