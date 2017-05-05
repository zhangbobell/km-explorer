///<reference types="webpack-env" />

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from "react-hot-loader";
import App from './app';

const rootEle = document.querySelector('#example');

ReactDOM.render(
    <AppContainer>
        <App />
    </AppContainer>, 
    rootEle
);

if (module.hot) {
    module.hot.accept("./app", () => {
        const NextApp = require<any>('./app').App;
        ReactDOM.render(
            <AppContainer>
                <App />
            </AppContainer>,
            rootEle
        );
    });
}