module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["."],
          alias: {
            components: "./src/components",
            screens: "./src/screens",
            services: "./src/services",
            store: "./src/store",
            theme: "./src/theme",
            utils: "./src/utils",
          },
        },
      ],
    ],
  };
};
