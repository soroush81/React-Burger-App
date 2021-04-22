import React from 'react';
import './Toolbar.css';
import '../../Logo/Logo';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems'
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';


const Toolbar = (props) => {
    return (
        <header className="Toolbar">
            <DrawerToggle clicked={props.clicked} />
            <Logo />
            <nav className="DesktopOnly">
                <NavigationItems />
            </nav>
        </header>
    );
}


export default Toolbar;