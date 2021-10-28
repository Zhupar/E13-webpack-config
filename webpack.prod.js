const {merge} = require("webpack-merge");
const commonConfig = require("./webpack.common");

const prodConfig = {
    mode: "production",
    devServer: {        
        hot: false,
    },
};

module.exports = merge(commonConfig, prodConfig);