module.exports = {
    devServer: {
      host: '0.0.0.0',
      disableHostCheck: true
    },
    resolve: {
      extensions: ['.jsx', '.js', '.json']
    },
    module: {
      rules: [
        {
          test: /\.js|\.jsx$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        }
      ]
    }
  };