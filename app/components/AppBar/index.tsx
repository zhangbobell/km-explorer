import * as React from 'react'
import AppBar from 'material-ui/AppBar';
import { injectIntl, InjectedIntlProps } from 'react-intl';


class KMAppBar extends React.Component<InjectedIntlProps, undefined> {

    constructor(props) {
        super(props);
    }

    render(){
        let title = this.props.intl.formatMessage({id: 'kityminder', defaultMessage: 'kityminder'});

        return (<AppBar
            title={title}
            iconClassNameRight="muidocs-icon-navigation-expand-more"
        />);
    }
}

export default injectIntl(KMAppBar);