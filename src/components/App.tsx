import * as React from 'react'
import { Hello } from './hello'

export default class App extends React.Component<any, any> {
    render() {
        return (<Hello compiler="TypeScript" framework="React" />);
    }
};