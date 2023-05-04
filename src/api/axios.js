import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "4c8041b285b8465d17168ae5e07d8944",
    language: "ko-KR",
  },
});

export default instance;
