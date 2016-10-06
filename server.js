"use strict";
const path = require('path'),
    express = require('express');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

const webpack = require('webpack');
const webpackConfig = require('./webpack.hot.config');
const compiler = webpack(webpackConfig);

app.use(require("webpack-dev-middleware")(compiler, {
    publicPath: webpackConfig.output.publicPath,
    noInfo: true
}));
app.use(require("webpack-hot-middleware")(compiler, {
    log: console.log,
    path: '/__webpack_hmr',
    heartbeat: 10 * 1000
}));

//wildcard '/*' for react router need to be last!! to not ruin all static files (/dist/app.js) of webpack
app.get('/*', (req, res, next) => {
    res.sendFile(path.join(__dirname,'public','index.html'));
});

const port = process.env.PORT || 9999;
app.listen(port, () => {
    console.log('Server started http://localhost:' + port + '/');
});