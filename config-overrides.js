const { override, addWebpackPlugin } = require('customize-cra');
const webpack = require('webpack');

module.exports = override(
  addWebpackPlugin(
    new webpack.DefinePlugin({
      'process.env.PUBLIC_URL': JSON.stringify(
        process.env.NODE_ENV === 'production' ? '/portfolio' : ''
      ),
    })
  )
);
