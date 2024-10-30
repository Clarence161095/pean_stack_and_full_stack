const path = require("path");

module.exports = {
  entry: "./app.js", // Đường dẫn tới file entry của bạn
  target: "node",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  externals: [],
  resolve: {
    extensions: [".js"],
  },
};
