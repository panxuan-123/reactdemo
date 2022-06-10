const path = require('path') // 引用path模块
module.exports = { // 这里是commrnt.js语法
    // 入口文件
    entry: "./src/index.js",
    // 打包后的出口文件
    output: {
        // 输出的路径  是绝对路径(导入path模块) 这里是用node来做的
        path: path.resolve(__dirname, 'build'),
        // 输出的文件名称
        filename: 'build.js',
    },
    // 使用开发模式打包
    // mode:"development"
    module: {
        rules: [{
                test: /\.css$/,
                use: [

                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    }

                
            ]
        },

        {

            test: /\.(js|jsx)$/, // 这里加入jsx
            use: {
                loader: 'babel-loader',
                options: { //用babel-loader需要把es6->es5
                    presets: [
                        '@babel/preset-env',
                        '@babel/preset-react' //yarn add @babel/core @babel/preset-react -D
                    ],
                    plugins: [
                        '@babel/plugin-proposal-class-properties',
                        // '@babel/plugin-syntax-dynamic-import'
                    ]
                }
            },
            exclude: /node_module/, //优化项(2):排除某个文件
            // include:path.resolve('src')  //包含
        },
    ]
}

}