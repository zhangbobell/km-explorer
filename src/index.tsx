import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import App from './components/App';

const rootEle = document.querySelector('#example');

ReactDOM.render(
    <AppContainer>
        <App />
    </AppContainer>,
    rootEle
);

if (module.hot) {
    module.hot.accept('./components/App', () => {
        const NextApp = require<RequireImport>('./components/App').default;

        ReactDOM.render(
            <AppContainer>
                <NextApp />
            </AppContainer>,
            rootEle
        )
    })
}