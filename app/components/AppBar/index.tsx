import * as React from 'react'
import AppBar from 'material-ui/AppBar';
import { injectIntl, InjectedIntlProps } from 'react-intl';

import Toolbar from '../Toolbar';


class KMAppBar extends React.Component<InjectedIntlProps, undefined> {

    constructor(props) {
        super(props);
    }

    render(){
        let title = this.props.intl.formatMessage({id: 'kityminder', defaultMessage: 'kityminder'});

        return (<AppBar
            title={title}
            children={Toolbar}
            iconClassNameRight="muidocs-icon-navigation-expand-more"
        />);
    }
}

export default injectIntl(KMAppBar);