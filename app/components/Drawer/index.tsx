import * as React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import ActionHome from 'material-ui/svg-icons/action/home';
import ActionHistory from 'material-ui/svg-icons/action/history';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ActionDelete from 'material-ui/svg-icons/action/delete';
import FileFolderShared from 'material-ui/svg-icons/file/folder-shared';
import { injectIntl, InjectedIntlProps } from 'react-intl';

interface DrawerState {
    open: boolean
}

interface DrawerProps extends InjectedIntlProps {

}


class KMDrawer extends React.Component<DrawerProps, DrawerState> {

    constructor(props) {
        super(props);
        this.state = { open: true };
    }

    handleToggle = () => this.setState({ open: !this.state.open });


    render() {
        let myFiles = this.props.intl.formatMessage({ id: 'myFile'});
        let recentlyUsed = this.props.intl.formatMessage({ id: 'recentlyUsed'});
        let starred = this.props.intl.formatMessage({ id: 'starred'});
        let shared = this.props.intl.formatMessage({ id: 'shared'});
        let deleted = this.props.intl.formatMessage({ id: 'deleted'});        
        let forceNavDown = {'top': '128px'}

        return (<Drawer
                open={this.state.open}
                zDepth={1}
                containerStyle={forceNavDown}>
                    <MenuItem leftIcon={<ActionHome />}>{myFiles}</MenuItem>
                    <MenuItem leftIcon={<ActionHistory />}>{recentlyUsed}</MenuItem>
                    <MenuItem leftIcon={<ActionGrade />}>{starred}</MenuItem>
                    <MenuItem leftIcon={<FileFolderShared />}>{shared}</MenuItem>                    
                    <MenuItem leftIcon={<ActionDelete />}>{deleted}</MenuItem>
            </Drawer>
        );
    }
}

export default injectIntl(KMDrawer);