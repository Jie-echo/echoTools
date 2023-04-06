const path = require('path')

module.exports = {
  entry: './src/index.js',
  mode: 'development', // 设置开发模式
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'echo-track.umd.js',
    library: 'echo-track',
    libraryTarget: 'umd',
    libraryExport: 'default'
  },
  // 生成 CJS 格式的输出
  // output: {
  //   filename: 'echo-track.cjs.js',
  //   path: path.resolve(__dirname, 'dist'),
  //   library: 'EchoTrack',
  //   libraryTarget: 'commonjs'
  // },
  // // 生成 ESM 格式的输出
  // output: {
  //   filename: 'echo-track.esm.js',
  //   path: path.resolve(__dirname, 'dist'),
  //   library: 'EchoTrack',
  //   libraryTarget: 'module',
  //   libraryExport: 'default'
  // },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
}