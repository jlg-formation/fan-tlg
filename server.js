'use strict';

const express = require('express'); // charge ExpressJS
const serveIndex = require('serve-index');

const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
const webpackDevMiddleware = require('webpack-dev-middleware');

const ws = require('./web-service.js');

const app = express();

webpackConfig.output.path = '/';
const compiler = webpack(webpackConfig);
app.use('/app/wpk/', webpackDevMiddleware(compiler, {}));

app.use('/app/ws', ws);

app.use(express.static('.'));
app.use(serveIndex('.', {icons: true}));

// url re-writing
app.use(['/app/products','/app/services','/app/contact'], function(req, res, next) {
	res.sendFile('./app/index.html', {root: __dirname});
});

app.use(function(req, res, next) {
	console.log('404: Page not Found', req.url);
	next();
});

app.listen(8000, function() {
	console.log('server started on port 8000');
});

