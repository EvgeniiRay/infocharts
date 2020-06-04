module.exports = {
  resolve: {
    extensions: ['.js', '.json', '.ts', '.tsx', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)/,
        loader: "ts-loader",
        exclude: ['/node_modules/', '/lib/']
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          }
        ]
      }
    ],
  },
}
