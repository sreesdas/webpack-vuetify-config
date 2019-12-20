var path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const VuetifyLoaderPlugin = require("vuetify-loader/lib/plugin");

module.exports = {
  mode: "development",
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    publicPath: "/dist/",
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.s(c|a)ss$/,
        use: [
          "vue-style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            // Requires sass-loader@^7.0.0
            options: {
              implementation: require("sass"),
              fiber: require("fibers"),
              indentedSyntax: true // optional
            },
            // Requires sass-loader@^8.0.0
            options: {
              implementation: require("sass"),
              sassOptions: {
                fiber: require("fibers"),
                indentedSyntax: true // optional
              }
            }
          }
        ]
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
        options: {
          loaders: {}
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    alias: {
      vue$: "vue/dist/vue.esm.js"
    },
    extensions: ["*", ".js", ".vue", ".json"]
  },
  plugins: [new VuetifyLoaderPlugin(), new VueLoaderPlugin()]
};
