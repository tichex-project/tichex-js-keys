const config = {
  devtool: "cheap-source-map",
  entry: ['./src/index.ts'],
  output: {
    path: __dirname + '/lib',
    filename: 'tichex-js-keys.js',
    library: 'tichex-js-keys',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    globalObject: 'typeof self !== \'undefined\' ? self : this',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/,
        query: {
          presets: ['@babel/preset-env']
        }
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  }
}
module.exports = config;
