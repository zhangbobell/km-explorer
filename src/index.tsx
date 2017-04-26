import 'react-hot-loader/patch';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import App from './components/App';

const rootEle = document.querySelector('#example');

const render = (Component: any) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    rootEle
  );
}

render(<App />);

if (module.hot) {
    module.hot.accept('./components/App', () => {
        const NextApp = require<RequireImport>('./components/App').default;

       render(<NextApp />);
    })
}