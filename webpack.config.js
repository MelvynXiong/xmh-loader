var path = require("path");

module.exports = {
  mode: "development",
  entry: "./entry/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.hello$/,
        use: [
          {
            loader: path.resolve(__dirname, "./loader/hello-loader.js"),
            options: { comment: "这是个测试loader" },
          },
        ],
      },
    ],
  },
};
