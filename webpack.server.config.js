const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env) => {
  return {
    entry: {
      app: path.resolve(__dirname, "src/pages/containers/app.js"),
    },
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "ssr/[name].js",
      publicPath: "/",
      chunkFilename: "js/[id].[chunkhash].js",
      libraryTarget: "commonjs2",
    },
    devServer: {
      port: 9000,
    },
    target: "node",
    module: {
      rules: [
        {
          // test: que tipo de archivo quiero reconocer,
          // use: que loader se va a encargar del archivo
          test: /\.(js|jsx)$/,
          exclude: /(node_modules)/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["es2015", "react", "stage-2"],
            },
          },
        },
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, "css-loader"],
        },
        {
          test: /\.(jpg|png|gif|svg)$/,
          use: {
            loader: "url-loader",
            options: {
              limit: 1000000,
              fallback: "file-loader",
              name: "images/[name].[hash].[ext]",
            },
          },
        },
      ],
    },
    plugins: [new MiniCssExtractPlugin()],
  };
};
