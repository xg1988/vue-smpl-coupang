const { VueLoaderPlugin } = require('vue-loader')
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = (env, options) => {
  console.log(env, options)
  return {
    resolve: {
      extensions: ['.js', '.vue'],
      alias: {
        '~': `${__dirname}/src`
      }
    },
    entry: './src/main.js',
    // entry: { main: '', module1: '', module2: '' },
    output: {
      //path: `${__dirname}/dist`,
      path: '/Users/joseong-ug/코드/Frontend/vue-smpl-coupang/dist',

      // filename: '[name].js',
      //publicPath: '/',
      clean: true
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: 'babel-loader'
        },
        {
          test: /\.vue$/,
          use: 'vue-loader'
        },
        {
          test: /\.s?css$/,
          use: [
            'vue-style-loader',
            'css-loader',
            'postcss-loader',
            {
              loader: 'sass-loader',
              options: {
                additionalData: `
                  @use "sass:color";
                  @use "sass:list";
                  @use "sass:map";
                  @use "sass:math";
                  @use "sass:meta";
                  @use "sass:selector";
                  @use "sass:string";
                  @import "~/scss/_variables";
                `
              }
            }
          ]
        }
      ]
    },
    plugins: [
      new VueLoaderPlugin(),
      new HtmlPlugin({
        template: './src/index.html'
      }),
      new CopyPlugin({
        patterns: [
          { from: 'static' }
        ]
      })
    ],
    devServer: {
      historyApiFallback: true
      /*port: 8081, // 클라이언트 포트 번호
      proxy: {
        '/coupang/*': { // /api/로 시작하는 url은 아래의 전체 도메인을 추가하고, 옵션을 적용
          target: 'http://localhost:8080', // 클라이언트에서 api로 보내는 요청은 주소를 3095로 바꿔서 보내겠다 라는 뜻
          changeOrigin: true, // cross origin 허용 설정
        },
      },*/
    }
  }
}
