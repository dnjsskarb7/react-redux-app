const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    ["/auth/google", "/auth/logout", "/posts"],
    createProxyMiddleware({
      target: "http://localhost:5000",
    })
  );
};
