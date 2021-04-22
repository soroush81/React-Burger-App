import React from 'react';

import Auxiliary from '../../hoc/Auxiliary';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import './Layout.css';
import '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

const Layout = (props) => {

    const [showSideDrawer, setShowSideDrawer] = React.useState(false);

    const sideDrawerCloseHandler = () => {
        setShowSideDrawer(false);
    }


    const drawerToggleClickHandler = () => {
        setShowSideDrawer(!showSideDrawer);
    }

    return (
        <Auxiliary>
            <div>
                <Toolbar open={showSideDrawer} clicked={drawerToggleClickHandler} />
                <SideDrawer open={showSideDrawer} closed={sideDrawerCloseHandler} />
            </div>
            <main className="content">{props.children}</main>
        </Auxiliary>
    );
}
export default Layout;


