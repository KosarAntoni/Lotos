module.exports = {
  mode: 'development',

  entry: {
    app: './app.js',
  },

  devtool: 'source-map',

  module: {
    rules: [
      {
        // Compile ES2015 using babel
        test: /\.js$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/env', '@babel/react'],
            },
          },
        ],
      },
    ],
  },
};
