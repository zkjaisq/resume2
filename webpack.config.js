const path = require('path');

module.exports = {
  entry: './src/js/app.js',
  output: {
     filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist/')
  },
  module: {
  rules: [
    {
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['env']
        }
      }
    },
    {
            test: /\.scss$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
              loader: "postcss-loader",
              options: {config: {path: 'config/postcss.config.js'}}
            },{
                loader: "sass-loader" // compiles Sass to CSS
            }, 
         
            ]
    },
    {
      test: /\.(jpe?g|png|gif|svg)$/i,
      use: [
        'url-loader?limit=10000',
        'img-loader'
      ]
    }
  ]
}
};
