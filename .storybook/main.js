// Storybookサーバーの動作を制御するためのファイル
// 変更する場合はStorybookのプロセスを再起動する必要がある
module.exports = {
  stories: ["../packages/**/*.stories.@(tsx)", "../doc/**/*.stories.mdx"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react",
  core: {
    builder: "webpack5",
  },
  features: {
    storyStoreV7: true,
  },
  webpackFinal: (config) => {
    // enable linaria's css to be loaded as it is modified
    config.module.rules.push({
      test: /\.(tsx|ts)$/,
      exclude: /node_modules/,
      use: {
        loader: "@linaria/webpack-loader",
        options: {
          sourceMap: process.env.NODE_ENV !== "production",
        },
      },
    });
    return config;
  },
};
