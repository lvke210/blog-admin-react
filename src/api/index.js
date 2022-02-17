import axios from "axios";
//新增留言
const addHole = (data) => axios.post("/api/addHole", data);
//删除留言
const delHole = (id) => axios.get(`/api/delHole?id=${id}`);
//获取留言列表
const getHoleList = () => axios.get("/api/getHoleList");

//获取用户列表
const getUser = () => axios.get("/api/user");
//新增用户
const addUser = () => axios.get("/api/addUser");

//获取博客列表
const getArticleList = () => axios.get("/api/getArticleList");
//新增博客
const addArticle = (data) => axios.post("/api/addArticle", data);

export { getUser, addArticle, getHoleList, getArticleList, addHole, addUser, delHole };
