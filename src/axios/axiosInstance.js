import axios from "axios";

const AXIOS_INSTANCE = axios.create({
  baseURL: ""
});

// AXIOS_INSTANCE.defaults.withCredentials = true;
AXIOS_INSTANCE.defaults.headers.post["Content-Type"] = "application/json";
// 请求拦截
AXIOS_INSTANCE.interceptors.request.use(config => {
  return config;
});

// 响应拦截
AXIOS_INSTANCE.interceptors.response.use(
  res => {
    /*if (res.data.code === 600) {}*/
    return res;
  },
  error => {
    return Promise.reject(error);
  }
);

export default async (url = "", data = null, config = {}) => {
  const defaultConfig = {
    url: url,
    method: "get",
    timeout: 20000
  };
  if (config.method) {
    config.method = config.method.toLowerCase();
  }

  const axiosConfig = Object.assign(defaultConfig, config);
  if (axiosConfig.method === "get") {
    axiosConfig.params = data;
  } else {
    axiosConfig.data = data;
  }

  try {
    const response = await AXIOS_INSTANCE(axiosConfig);
    return response;
  } catch (error) {
    throw new Error(error);
  }
};
