import * as React from 'react';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';
import { injectIntl, InjectedIntlProps } from 'react-intl';


class KMList extends React.Component<InjectedIntlProps, undefined> {

    constructor(props) {
        super(props);
    }


    render() {   
        let forceNavDown = {'top': '64px'}

        return (<List>
                    <ListItem
                        leftAvatar={<Avatar icon={<FileFolder />} />}
                        primaryText="Photos"
                    />
                    <ListItem
                        leftAvatar={<Avatar icon={<FileFolder />} />}
                        primaryText="Recipes"
                    />
                </List>
        );
    }
}

export default injectIntl(KMList);
