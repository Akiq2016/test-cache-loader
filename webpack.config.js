const webpack = require("webpack");

module.exports = {
  module: {
    rules: [
      {
        test: /\.json$/,
        type: "javascript/auto",
        use: [
          "cache-loader",
          {
            loader: "file-loader",
            options: {
              name: `[name].json`,
            },
          },
        ],
      },
    ],
  },
};
