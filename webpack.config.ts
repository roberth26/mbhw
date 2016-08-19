var autoprefixer = require( 'autoprefixer' );

module.exports = {
	entry: './src/index.jsx',
	output: {
		path: './',
		filename: 'bundle.min.js'
	},
  	module: {
	    loaders: [
			{
				test: /.jsx?$/,
				loader: 'babel',
				exclude: /node_modules/,
				query: {
					presets: [ 'es2015', 'react' ]
				}
				
			},
			{
				test: /\.scss$/,
				loaders: [ 'style', 'css', 'sass', 'postcss' ]
			}
		]
	},
	postcss: [
		autoprefixer({
			browsers: [ 'last 5 versions' ]
		})
	]
};