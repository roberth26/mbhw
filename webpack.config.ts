var autoprefixer = require( 'autoprefixer' );
var webpack = require( 'webpack' );
var webpackUglifyJsPlugin = require( 'webpack-uglify-js-plugin' );

module.exports = {
	entry: './src/index.jsx',
	output: {
		path: './',
		filename: 'bundle.min.js'
	},
	devtool: 'cheap-module-source-map',
	//devtool: 'eval',
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
	],
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify( 'production' )
			}
		}),
		new webpack.optimize.UglifyJsPlugin({
		    compress: {
		        warnings: false
		    }
		})
	]
};