/** @type {import('postcss-load-config').Config} */
const config = {
    syntax: 'postcss-scss',
    plugins: [
      require('postcss-advanced-variables'),
      require('postcss-nested'),
      require('postcss-strip-inline-comments'),
      require('autoprefixer'),
    ]
  }
  
  module.exports = config