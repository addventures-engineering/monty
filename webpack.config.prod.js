const path = require("path")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const postcssPresetEnv = require("postcss-preset-env")

const devMode = "production"

const outpuDir = './dist'
const entry = './src/js/main.js'
const cssOutput = 'style.css'

module.exports = {

  // Tells Webpack which built-in optimizations to use
  // If you leave this out, Webpack will default to 'production'
  mode: devMode,

  optimization: {
    nodeEnv: devMode
  },

  // Webpack needs to know where to start the bundling process,
  // so we define the Sass file under './Styles' directory
  entry: entry,

  // This is where we define the path where Webpack will place
  // a bundled JS file. Webpack needs to produce this file,
  // but for our purposes you can ignore it
  output: {
    path: path.resolve(__dirname, outpuDir),

    // Specify the base path for all the styles within your
    // application. This is relative to the output path, so in
    // our case it will be './dist/css'
    publicPath: "/js/",

    // The name of the output bundle. Path is also relative
    // to the output path, so './dist/js'
    filename: "js/main.min.js"
  },
  module: {

    // Array of rules that tells Webpack how the modules (output)
    // will be created
    rules: [
      // TODO: add linter using eslint per pattern in reast-scripts
      {
        // "oneOf" will traverse all following loaders until one will
        // match the requirements. When no loader matches it will fall
        // back to the "file" loader at the end of the loader list.
        oneOf: [{
            // Transpile JavaScript using babel
            test: /\.js$/,
            exclude: [/[/\\\\]node_modules[/\\\\]/],
            use: 'babel-loader'
          },
          {
            // Look for Sass files and process them according to the
            // rules specified in the different loaders
            test: /\.(sa|sc)ss$/,

            // Use the following loaders from right-to-left, so it will
            // use sass-loader first and ending with MiniCssExtractPlugin
            use: [{
                // Extracts the CSS into a separate file and uses the
                // defined configurations in the 'plugins' section
                loader: MiniCssExtractPlugin.loader
              },
              {
                // Interprets CSS
                loader: "css-loader",
                options: {
                  importLoaders: 2
                }
              },
              {
                // Use PostCSS to minify and autoprefix with vendor rules
                // for older browser compatibility
                loader: "postcss-loader",
                options: {
                  ident: "postcss",

                  // We instruct PostCSS to autoprefix and minimize our
                  // CSS when in production mode, otherwise don't do
                  // anything.
                  plugins: [
                    require('postcss-flexbugs-fixes'),
                    require('autoprefixer'),
                  ]
                }
              },
              {
                // Adds support for Sass files, if using Less, then
                // use the less-loader
                loader: "sass-loader"
              }
            ]
          },
          {
            // Adds support to load images in your CSS rules. It looks for
            // .png, .jpg, .jpeg and .gif
            test: /\.(png|jpe?g|gif)$/,
            use: [{
              loader: "file-loader",
              options: {

                // The image will be named with the original name and
                // extension
                name: "[name].[ext]",

                // Indicates where the images are stored and will use
                // this path when generating the CSS files.
                // Example, in site.scss I have
                // url('../resources/images/pattern.png') and when generating
                // the CSS file, file-loader will output as
                // url(../images/pattern.png), which is relative
                // to '/css/site.css'
                publicPath: "../images",

                // When this option is 'true', the loader will emit the
                // image to output.path
                emitFile: false
              }
            }]
          }
        ]
      }
    ]
  },
  plugins: [

    // Configuration options for MiniCssExtractPlugin. Here I'm only
    // indicating what the CSS output file name should be and
    // the location
    new MiniCssExtractPlugin({
      filename: "css/style.min.css"
    })
  ]
}
