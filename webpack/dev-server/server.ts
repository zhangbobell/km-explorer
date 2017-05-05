import * as path from 'path';
import * as express from 'express';
import * as webpack from 'webpack';
import * as WebPackDevMiddleware from 'webpack-dev-middleware';
import * as WebPackHotMiddleware from 'webpack-hot-middleware';
import open = require('open');

export function serve(port: number) {
    let app = express();

    if (process.env.NODE_ENV !== 'production') {
        setupWebpackDevelopmentServer(app);
    }

    app.listen(port, function (err) {
        if (err) {
            return console.error(JSON.stringify(err));
        }

        const url = `http://localhost:${port}`;
        open(url);
        console.log(`\nDevelopment Server served at ${url}\n\n`)
    })

}

function setupWebpackDevelopmentServer(app: express.Express) {
    let config = require('../webpack.config');
    let compiler = webpack(config);

    let devMiddleware = WebPackDevMiddleware(compiler, {
        publicPath: '/',
        noInfo: true,
        stats: {
            colors: true
        },
        quiet: false
    });

    let hotMiddleware = WebPackHotMiddleware(compiler);

    app.use(devMiddleware);
    app.use(hotMiddleware);
}