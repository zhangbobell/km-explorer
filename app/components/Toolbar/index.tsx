import * as React from 'react'
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import { injectIntl, InjectedIntlProps } from 'react-intl';


class KMToolbar extends React.Component<InjectedIntlProps, undefined> {

    constructor(props) {
        super(props);
    }

    render(){

        return (<Toolbar>
                    <ToolbarGroup firstChild={true}>
                    <DropDownMenu value={3}>
                        <MenuItem value={1} primaryText="All Broadcasts" />
                        <MenuItem value={2} primaryText="All Voice" />
                        <MenuItem value={3} primaryText="All Text" />
                        <MenuItem value={4} primaryText="Complete Voice" />
                        <MenuItem value={5} primaryText="Complete Text" />
                        <MenuItem value={6} primaryText="Active Voice" />
                        <MenuItem value={7} primaryText="Active Text" />
                    </DropDownMenu>
                    </ToolbarGroup>
                </Toolbar>);
    }
}

export default injectIntl(KMToolbar);

