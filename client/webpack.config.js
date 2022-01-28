module.exports = {
  entry: "./server.js",
  output: {
    filename: "compiled.js",
  },
  node: "empty",
  browser: {
    fs: false,
    path: false,
    os: false,
  },
  resolve: {
    extensions: [".js", ".jsx"],
    fallback: {
      fs: false,
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};
