import { postApi } from "../baseApiService";

const baseurl = `https://localhost:7084/api`;

export const postWidget = async (url, data) => {
    const response = await postApi(baseurl + url, data);
    return response;
  };
  