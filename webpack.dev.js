const {merge} = require("webpack-merge");
const commonConfig = require("./webpack.common");

const devConfig = {
    mode: "development",
    devServer: {        
        hot: true,
    },
};

module.exports = merge(commonConfig, devConfig);