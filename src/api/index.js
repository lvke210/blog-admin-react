import axios from "axios";
// const BASE_URL="http://lvke210.com"
const getUser = () => axios.get("/api/user");
const getHoleList = () => axios.get("/api/getHoleList");
const getArticleList = () => axios.get("/api/getArticleList");
export { getUser, getHoleList, getArticleList };
