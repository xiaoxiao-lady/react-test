const { override, fixBabelImports, addBabelPlugins } = require("customize-cra");

module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true, // change importing css to less
  }),
  addBabelPlugins(
    // 支持装饰器
    [
      "@babel/plugin-proposal-decorators",
      {
        legacy: true,
      },
    ]
  )
  // addLessLoader({
  //   javascriptEnabled: true,
  //   modifyVars: { "@primary-color": "#1DA57A" },
  // })
);
