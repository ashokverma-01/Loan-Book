import axios from "axios";
import accessToken from "./jwt-token-access/accessToken";

const buildQueryParams = (params) => {
  const ignoreParams = ["totalDocs", "totalPages"];
  const tempArr = [];
  for (const key in params) {
    if (ignoreParams.includes(key)) {
      continue;
    }
    if (Object.hasOwnProperty.call(params, key)) {
      const element = params[key];
      if (element !== "" && element != null && element != undefined) {
        tempArr.push(key + "=" + element);
      }
    }
  }
  return tempArr.join("&");
};
//apply base url for axios
//local backend url
export const API_URL = "http://localhost:3000/v1";

//live backend url
// export const API_URL = "http://3.110.168.130/api/v1";

const axiosApi = axios.create({
  baseURL: API_URL,
});

axiosApi.interceptors.request.use(
  (config) => {
    const token = accessToken();
    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
axiosApi.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

export async function get(url, params = {}, config = {}) {
  const queryString = buildQueryParams(params);
  const fullUrl = queryString ? `${url}?${queryString}` : url;
  return await axiosApi
    .get(fullUrl, { ...config })
    .then((response) => response.data);
}

export async function post(url, data, config = {}) {
  return axiosApi
    .post(url, { ...data }, { ...config })
    .then((response) => response.data);
}

export async function put(url, data, config = {}) {
  return axiosApi
    .put(url, { ...data }, { ...config })
    .then((response) => response.data);
}

export async function del(url, config = {}) {
  return await axiosApi
    .delete(url, { ...config })
    .then((response) => response.data);
}
export const getLoggedinUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};
