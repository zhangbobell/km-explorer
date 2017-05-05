import * as React from 'react'
import { Hello } from './hello'

export class App extends React.Component<any, any> {
    render() {
        return (<Hello compiler="TypeScript 4" framework="React 3" />);
    }
};