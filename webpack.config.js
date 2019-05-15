const webpack = require('webpack')
const ignore = new webpack.IgnorePlugin(/^canvas$/)

module.exports = {
  target: 'node',
  plugins: [ignore]
}
