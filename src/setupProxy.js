const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api", {
      // target: "http://lvke210.com" /*服务器地址*/,
      target: "http://localhost:3000" /*本地地址*/,
      changeOrigin: true,
      // ws: true,
      // pathRewrite: {
      //   "^/api": "",
      // },
    })
  );
};
