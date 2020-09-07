const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        // use: ['style-loader', 'css-loader'],
        // use: [
        //   'style-loader',
        //   {
        //     loader: 'css-loader',
        //     options: {
        //       // 开启此配置，会将所有CSS样式转化为uuid；在require引入时，会返回对应关系
        //       modules: true,
        //     },
        //   },
        // ],
        // 将css-loader、style-loader传入ExtractTextPlugin的extract函数内
        // 插件方式失败，才会使用style-loader，默认不会使用
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
        }),
      },
    ],
  },
  // 指定提取后的CSS输出的路径
  plugins: [new ExtractTextPlugin('07-webpack-main.css')],
};
