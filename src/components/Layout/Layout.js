import React from 'react';

import Auxiliary from '../../hoc/Auxiliary';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import './Layout.css';
import '../Navigation/Toolbar/Toolbar';

const layout = (props) => (
    <Auxiliary>
        <div>
            <Toolbar />
        </div>
        <main className="content">{props.children}</main>
    </Auxiliary>
);

export default layout;


