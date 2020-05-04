module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    }
  },
  // plugins: {
  //   autoprefixer: {
  //     browsers: ['Android >= 4.0', 'iOS >= 8'],
  //   },
  //   'postcss-pxtorem': {
  //     rootValue: 37.5,
  //     propList: ['*'],
  //   },
  // },
}

