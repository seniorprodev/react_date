const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: ['style-loader', 'raw-loader', 'sass-loader'],
        include: [
          path.resolve(__dirname, '../css/'),
        ],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'babel-loader',
            query: {
              presets: ['airbnb'],
            },
          },
          {
            loader: 'react-svg-loader',
            query: {
              jsx: true,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
