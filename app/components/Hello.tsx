import * as React from 'react';

export interface HelloProps {
    compiler: string;
    framework: string;
}

export default class Hello extends React.Component<HelloProps, any> {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (<h1>Hello from { this.props.compiler }, and { this.props.framework }</h1>);
    }
}