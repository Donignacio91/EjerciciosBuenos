const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const extracCss = new ExtractTextPlugin({
    filename: 'style.css',
})

module.exports = {
    entry:'./src/js/bootstrap.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename:'bundle.js'
    },
    mode: 'production',
    module: {
        rules:[
            {test: /\.css$/,
            use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader',
                    options: {
                            modules:true
                        }
                    }
                ]
               },{test:/\.scss$/, 
                use: extracCss.extract({
                    use:[{loader: 'css-loader' },{loader: 'sass-loader'}],
                    fallback:'style-loader'
                }) 
            //loader:['style-loader', 'css-loader', 'sass-loader'] }

            }
             ]
            },
    plugins:[extracCss]
        } 
     
            
 