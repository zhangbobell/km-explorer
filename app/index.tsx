import './index.less';

import * as React from 'react'

import { IntlProvider, addLocaleData } from 'react-intl';
import * as en from 'react-intl/locale-data/en';
import * as zh from 'react-intl/locale-data/zh';
import en_US from './i18n/en_US';
import zh_CN from './i18n/zh_CN';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { MuiThemeProvider, lightBaseTheme } from 'material-ui/styles';

import AppBar from './components/AppBar';
import Drawer from './components/Drawer';
import List from './components/List';
import Toolbar from './components/Toolbar';
import Hello from './components/Hello';

const lightMuiTheme = getMuiTheme(lightBaseTheme);
addLocaleData([...en, ...zh]);

function chooseLocale() {
    switch(navigator.language.split('-')[0]){
        case 'en':
            return en_US;
        case 'zh':
            return zh_CN;
        default:
            return zh_CN;
    }
}

export default class App extends React.Component<any, any> {
    render() {
        return (
            <IntlProvider locale={navigator.language} key={navigator.language} messages={chooseLocale()} defaultLocale="en" >
                <MuiThemeProvider muiTheme={lightMuiTheme}>
                    <div>
                       <AppBar />
                       <Drawer />
                       <List />
                    </div>
                </MuiThemeProvider>
            </IntlProvider>);
    }
};