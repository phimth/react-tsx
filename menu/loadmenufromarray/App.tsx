﻿import * as React from 'react';
 
import 'jqwidgets-scripts/jqwidgets/styles/jqx.base.css';
import 'jqwidgets-scripts/jqwidgets/styles/jqx.material-purple.css';

import JqxMenu, { IMenuProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxmenu';

class App extends React.PureComponent<{}, IMenuProps> {

    private myMenu = React.createRef<JqxMenu>();

    constructor(props: {}) {
        super(props);

        this.state = {
            source: [
                {
                    html: "<img src='./../images/mailIcon.png'/><span style='position: relative; left: 3px; top: -2px;'>Mail</span>", items: [
                        { html: "<img src='./../images/calendarIcon.png'/><span style='position: relative; left: 3px; top: -2px;'>Calendar</span>" },
                        { html: "<img src='./../images/contactsIcon.png'/><span style='position: relative; left: 3px; top: -2px;'>Contacts</span>" }
                    ]
                },
                {
                    html: "<img src='./../images/folder.png'/><span style='position: relative; left: 3px; top: -2px;'>Inbox</span>", items: [
                        { html: "<img src='./../images/folder.png'/><span style='position: relative; left: 3px; top: -2px;'>Admin</span>" },
                        { html: "<img src='./../images/folder.png'/><span style='position: relative; left: 3px; top: -2px;'>Corporate</span>" },
                        { html: "<img src='./../images/folder.png'/><span style='position: relative; left: 3px; top: -2px;'>Finance</span>" },
                        { html: "<img src='./../images/folder.png'/><span style='position: relative; left: 3px; top: -2px;'>Other</span>" }]
                },
                { html: "<img src='./../images/recycle.png'/><span style='position: relative; left: 3px; top: -2px;'>Deleted Items</span>" },
                { html: "<img src='./../images/notesIcon.png'/><span style='position: relative; left: 3px; top: -2px;'>Notes</span>" },
                { html: "<img src='./../images/settings.png'/><span style='position: relative; left: 3px; top: -2px;'>Settings</span>" },
                { html: "<img src='./../images/favorites.png'/><span style='position: relative; left: 3px; top: -2px;'>Favorites</span>" }
            ]
        }
    }

    public render() {
        return (
            <JqxMenu theme={'material-purple'} ref={this.myMenu}
                width={180} height={180} mode={'vertical'} source={this.state.source} />
        );
    }
}

export default App;