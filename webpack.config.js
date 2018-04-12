module.exports = {
    entry: './index.js',
  
    output: {
      filename: 'bundle.js',
      path: path.join(__dirname, './public/js')
    },
  
    module: {
         loaders: [{
            test: /\.js$/, 
            loader: "babel-loader",
            query: {
                presets: ['react','es2015']
            }
         },{
            test: /\.jsx$/,
            loader: 'babel-loader', 
             query: {
                 presets: ['react', 'es2015']
             }
         },{
            test: /\.css$/, 
            loader: "style!css"
        },{
             test: /\.(jpg|png|otf)$/, 
             loader: "url?limit=8192"
         },{
            test: /\.scss$/,
             loader: "style!css!sass"
         }]
    }
  }