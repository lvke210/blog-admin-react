const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api", {
      target: "http://lvke210.com" /*这里写自己的代理地址*/,
      changeOrigin: true,
      // ws: true,
      // pathRewrite: {
      //   "^/api": "",
      // },
    })
  );
};
