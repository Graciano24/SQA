const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ImageminWebpackPlugin = require('imagemin-webpack-plugin').default;
const ImageminMozjpeg = require('imagemin-mozjpeg');

module.exports = {
  entry: './src/scripts/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|webmanifest|webp|avif)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.(png|jpg|jpeg|gif|webp|avif)$/i, // new rule for image files
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
            },
          },
        ],
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'src/templates/index.html'),
      // manifest: './src/public/app.webmanifest'
    }),
    new HtmlWebpackPlugin({
      filename: 'bukuMatematika.html',
      template: path.resolve(__dirname, 'src/templates/bukuMatematika.html'),
    }),
    new HtmlWebpackPlugin({
      filename: 'bukuSejarah.html',
      template: path.resolve(__dirname, 'src/templates/bukuSejarah.html'),
    }),
    new HtmlWebpackPlugin({
      filename: 'bukuSains.html',
      template: path.resolve(__dirname, 'src/templates/bukuSains.html'),
    }),
    new HtmlWebpackPlugin({
      filename: 'bukuUmum.html',
      template: path.resolve(__dirname, 'src/templates/bukuUmum.html'),
    }),
    new HtmlWebpackPlugin({
      filename: 'quiz.html',
      template: path.resolve(__dirname, 'src/templates/quiz.html'),
    }),

    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/public/'),
          to: path.resolve(__dirname, 'public/'),
        },
        {
          from: path.resolve(__dirname, 'src/public/img/'), // new pattern for images
          to: path.resolve(__dirname, 'public/img/'),
        },
      ],
    }),
    new ImageminWebpackPlugin({
      plugins: [
        ImageminMozjpeg({
          quality: 50,
          progressive: true,
        }),
      ],
    }),
  ],
};
